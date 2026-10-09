// True-viewport capture over the DevTools protocol (headless Chrome clamps
// --window-size, so a 390px layout cannot come from --screenshot).
import { spawn } from "node:child_process";
import { writeFileSync } from "node:fs";
import WebSocket from "ws";
const [,, url, width, out, mobile] = process.argv;
const CH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const port = 9333 + Math.floor(Math.random() * 500);
const chrome = spawn(CH, ["--headless=new","--disable-gpu","--mute-audio","--autoplay-policy=user-gesture-required",`--remote-debugging-port=${port}`,"--user-data-dir=/tmp/impeccable-capture-"+port,"about:blank"], { stdio: "ignore" });
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
let targets;
for (let i = 0; i < 40; i++) { try { targets = await (await fetch(`http://127.0.0.1:${port}/json`)).json(); if (targets.length) break; } catch {} await sleep(250); }
const ws = new WebSocket(targets.find(t => t.type === "page").webSocketDebuggerUrl);
await new Promise(r => ws.onopen = r);
let id = 0; const pending = new Map();
ws.onmessage = (e) => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } };
const send = (method, params = {}) => new Promise(r => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
const w = Number(width);
await send("Page.enable"); await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride", { width: w, height: 900, deviceScaleFactor: 1, mobile: mobile === "mobile" });
await send("Page.navigate", { url });
await sleep(3500);
const metrics = await send("Page.getLayoutMetrics");
const h = Math.ceil(metrics.result.cssContentSize.height);
await send("Emulation.setDeviceMetricsOverride", { width: w, height: h, deviceScaleFactor: 1, mobile: mobile === "mobile" });
await sleep(800);
const sw = await send("Runtime.evaluate", { expression: "document.documentElement.scrollWidth + 'x' + document.documentElement.scrollHeight", returnByValue: true });
const shot = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: true, clip: { x: 0, y: 0, width: w, height: h, scale: 1 } });
writeFileSync(out, Buffer.from(shot.result.data, "base64"));
console.log(`${out}: viewport ${w}, document ${sw.result.result.value}`);
ws.close(); chrome.kill();

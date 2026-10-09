// The train.
//
// One object seen twice: on the route map it rides between stations; on the
// rail it follows you down the page. Both are driven by a critically damped
// spring that always starts from where the train is now, so a scroll, a tap or
// a key press mid-ride redirects it without a jump. Without JS every station
// is simply shown; nothing here is needed to read the page.
(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  var line = document.querySelector(".line");
  var map = document.querySelector(".map");
  var railTrain = document.querySelector(".train--rail");
  var mapTrain = document.querySelector(".train--map");
  var mapLit = document.querySelector(".map__lit");
  var lit = document.querySelector(".rail-lit");
  var stations = Array.prototype.slice.call(document.querySelectorAll(".station[data-code]"));
  var stops = Array.prototype.slice.call(document.querySelectorAll(".map__stop a"));
  var out = {
    code: document.querySelector("[data-indicator-code]"),
    name: document.querySelector("[data-indicator-name]"),
    next: document.querySelector("[data-indicator-next]")
  };
  if (!line || !railTrain || !stations.length) return;

  // ---------- a spring, Apple-style: damping ratio + response ----------
  // Critically damped (ratio 1) so it never overshoots a station; response is
  // roughly the time it takes to settle, which is what reads as mass.
  function Spring(response, ratio, onFrame) {
    this.k = Math.pow((2 * Math.PI) / response, 2);
    this.c = 2 * ratio * Math.sqrt(this.k);
    this.x = 0;
    this.v = 0;
    this.target = 0;
    this.raf = 0;
    this.last = 0;
    this.onFrame = onFrame;
  }
  Spring.prototype.set = function (value) {
    this.x = this.target = value;
    this.v = 0;
    this.onFrame(this.x, false);
  };
  Spring.prototype.to = function (value) {
    this.target = value;
    if (reduce.matches) return this.set(value);
    if (!this.raf) {
      this.last = performance.now();
      this.raf = requestAnimationFrame(this.step.bind(this));
    }
  };
  Spring.prototype.step = function (now) {
    var dt = Math.min(0.05, (now - this.last) / 1000);
    this.last = now;
    // semi-implicit Euler in four substeps so a long frame stays stable
    for (var i = 0; i < 4; i++) {
      var a = -this.k * (this.x - this.target) - this.c * this.v;
      this.v += a * (dt / 4);
      this.x += this.v * (dt / 4);
    }
    var settled = Math.abs(this.v) < 0.5 && Math.abs(this.x - this.target) < 0.5;
    if (settled) {
      this.x = this.target;
      this.v = 0;
      this.raf = 0;
    } else {
      this.raf = requestAnimationFrame(this.step.bind(this));
    }
    this.onFrame(this.x, !settled);
  };

  // ---------- the rail: the train follows the reader ----------
  var railHeight = 1;
  var current = null;
  var marks = [];

  function measure() {
    railHeight = line.offsetHeight;
    var lineTop = line.getBoundingClientRect().top + window.scrollY;
    marks = stations.map(function (s) {
      var r = s.querySelector(".station__mark").getBoundingClientRect();
      return { station: s, y: r.top + window.scrollY - lineTop + r.height / 2 };
    });
  }

  function announce(station) {
    if (station === current) return;
    if (current) current.classList.remove("is-here");
    station.classList.add("is-here");
    current = station;
    var index = stations.indexOf(station);
    stations.forEach(function (s, i) { s.classList.toggle("is-passed", i < index); });
    if (out.code) out.code.textContent = station.dataset.code;
    if (out.name) out.name.textContent = station.dataset.name;
    var next = stations[index + 1];
    if (out.next) out.next.textContent = next ? next.dataset.name : "Terminus";
    // the map train sits at the station you are reading
    rideMapTo(stopFor(station), false);
  }

  var rail = new Spring(0.45, 1, function (y, moving) {
    railTrain.style.transform = "translateY(" + (y - 12) + "px)";
    railTrain.classList.toggle("is-moving", moving);
    if (lit) lit.style.transform = "scaleY(" + Math.max(0, Math.min(1, y / railHeight)) + ")";
    var here = null;
    for (var i = 0; i < marks.length; i++) if (marks[i].y <= y + 2) here = marks[i].station;
    if (here) announce(here);
  });

  // the point of the rail that sits 38% down the viewport, so the train rides
  // a little ahead of your eye
  function railTarget() {
    var anchor = window.innerHeight * 0.38 - line.getBoundingClientRect().top;
    return Math.max(0, Math.min(railHeight, anchor));
  }

  // ---------- the map: the train rides between stations ----------
  var mapSpring = null;
  var boarding = null;
  // where the train docks at stop i, relative to its own resting box: on the
  // line, pulled up just short of the station sign so the code stays readable
  function stopPoint(i) {
    var r = stops[i].querySelector(".code").getBoundingClientRect();
    var base = mapTrain.parentNode.getBoundingClientRect();
    var vertical = window.innerWidth <= 820;
    return vertical
      ? { x: r.left + r.width / 2 - base.left - 12, y: r.top - 8 - 80 - base.top }
      : { x: r.left - 8 - base.left - 80, y: 0 }; // y 0: the resting box already sits on the line
  }
  if (mapTrain && map && stops.length) {
    mapSpring = new Spring(0.55, 1, function (p, moving) {
      var a = Math.max(0, Math.floor(p)), b = Math.min(stops.length - 1, a + 1), t = Math.min(1, Math.max(0, p - a));
      var pa = stopPoint(a), pb = stopPoint(b);
      var x = pa.x + (pb.x - pa.x) * t, y = pa.y + (pb.y - pa.y) * t;
      mapTrain.style.transform = "translate(" + x + "px, " + y + "px)";
      // the map line is lit as far as the train's nose, dim beyond it
      if (mapLit) {
        // offsetWidth/Height: layout size, untouched by the segment's own scale
        mapLit.style.transform = window.innerWidth <= 820
          ? "scaleY(" + Math.max(0, Math.min(1, (y + 80) / (mapLit.offsetHeight || 1))) + ")"
          : "scaleX(" + Math.max(0, Math.min(1, (x + 80) / (mapLit.offsetWidth || 1))) + ")";
      }
      mapTrain.classList.toggle("is-moving", moving);
      if (!moving && boarding) {
        var li = boarding;
        boarding = null;
        li.classList.add("is-boarding");
        setTimeout(function () { li.classList.remove("is-boarding"); }, 450);
      }
    });
  }
  function stopFor(station) {
    for (var i = 0; i < stops.length; i++) if (stops[i].getAttribute("href") === "#" + station.id) return i;
    return -1;
  }
  function rideMapTo(i, withDoors) {
    if (!mapSpring || i < 0) return;
    if (withDoors) boarding = stops[i].parentNode;
    mapSpring.to(i);
  }

  // ---------- events ----------
  var ticking = false;
  window.addEventListener("scroll", function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { ticking = false; rail.to(railTarget()); });
  }, { passive: true });
  window.addEventListener("resize", function () {
    measure();
    rail.set(railTarget());
    if (mapSpring) mapSpring.set(mapSpring.target);
  });

  // scroll so the station's mark lands under the train (the 38% anchor), so
  // the station you asked for is the one announced
  function rideTo(station) {
    var mark = station.querySelector(".station__mark");
    var top = (mark ? mark.getBoundingClientRect().top + mark.offsetHeight / 2 : station.getBoundingClientRect().top)
      + window.scrollY - window.innerHeight * 0.38 + 2;
    window.scrollTo({ top: Math.max(0, top), behavior: reduce.matches ? "auto" : "smooth" });
  }

  // tap a station on the map: the train rides there, the page follows
  stops.forEach(function (a, i) {
    a.addEventListener("click", function (e) {
      var target = document.querySelector(a.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      rideMapTo(i, true);
      rideTo(target);
      history.replaceState(null, "", a.getAttribute("href"));
    });
  });

  // ← → (or j / k): next and previous stop. A navigation, so the page simply
  // scrolls; the train's own ride is what you watch.
  document.addEventListener("keydown", function (e) {
    if (e.target && /input|textarea|select/i.test(e.target.tagName)) return;
    var dir = (e.key === "ArrowRight" || e.key === "j") ? 1 : (e.key === "ArrowLeft" || e.key === "k") ? -1 : 0;
    if (!dir) return;
    var index = current ? stations.indexOf(current) : -1;
    var next = stations[Math.max(0, Math.min(stations.length - 1, index + dir))];
    if (!next || next === current) return;
    e.preventDefault();
    rideTo(next);
  });

  // ---------- start ----------
  function start() {
    measure();
    rail.set(railTarget());
    if (mapSpring) mapSpring.set(Math.max(0, current ? stopFor(current) : 0));
  }
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(start); else start();
  window.addEventListener("load", function () { measure(); rail.to(railTarget()); });
})();

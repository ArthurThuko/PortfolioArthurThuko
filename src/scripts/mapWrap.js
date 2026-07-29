function initMapWrap() {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- Entrance: draw lines, then pop nodes, staggered ----------
  var mapWrap = document.getElementById('map-wrap');
  var lines = Array.from(document.querySelectorAll('.map-line'));
  var nodes = Array.from(document.querySelectorAll('.map-node'));
  var center = document.querySelector('.map-center');

  function playMapEntrance() {
    if (center) center.classList.add('is-visible');
    lines.forEach(function (line, i) {
      setTimeout(function () { line.classList.add('is-drawn'); }, reduce ? 0 : 150 + i * 90);
    });
    nodes.forEach(function (node, i) {
      setTimeout(function () { node.classList.add('is-visible'); }, reduce ? 0 : 260 + i * 90);
    });
  }

  if (mapWrap) {
    var mapObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          playMapEntrance();
          mapObserver.disconnect();
        }
      });
    }, { threshold: 0.25 });
    mapObserver.observe(mapWrap);
  }

  // ---------- Hover: highlight the connection, dim the rest ----------
  function setHover(nodeId) {
    nodes.forEach(function (n) {
      var match = n.dataset.node === nodeId;
      n.classList.toggle('is-dimmed', !!nodeId && !match);
      n.classList.toggle('is-active', match && !!nodeId);
    });
    lines.forEach(function (l) {
      var match = l.dataset.node === nodeId;
      l.classList.toggle('is-dimmed', !!nodeId && !match);
      l.classList.toggle('is-active', match && !!nodeId);
    });
  }

  nodes.forEach(function (node) {
    node.addEventListener('mouseenter', function () { setHover(node.dataset.node); });
    node.addEventListener('mouseleave', function () { setHover(null); });
  });

  // ---------- Mobile cards: staggered reveal on scroll ----------
  var cards = Array.from(document.querySelectorAll('.about-card'));
  var cardObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var i = cards.indexOf(entry.target);
        setTimeout(function () {
          entry.target.classList.add('is-visible');
        }, reduce ? 0 : i * 90);
        cardObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  cards.forEach(function (card) { cardObserver.observe(card); });
}

window.initMapWrap = initMapWrap;
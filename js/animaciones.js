/* Animaciones compartidas · solo JavaScript vanilla.
   Mejora progresiva: sin JS (o con movimiento reducido) todo el contenido se ve completo.
   Los estados iniciales ocultos viven en el CSS de cada página, solo bajo html.js. */
(function () {
  'use strict';
  var d = document;
  var h = d.documentElement;
  h.classList.add('js');

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------- Cabecera: compacta + sombra al bajar (con histéresis para evitar parpadeos) ---------- */
  var scrolled = false;
  var ticking = false;
  var aviso = d.querySelector('.aviso');
  function avisoOffset(y) {
    if (aviso) h.style.setProperty('--aviso-off', Math.max(0, aviso.offsetHeight - y) + 'px');
  }
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      var y = window.pageYOffset || h.scrollTop || 0;
      if (!scrolled && y > 70) { scrolled = true; h.classList.add('is-scrolled'); }
      else if (scrolled && y < 20) { scrolled = false; h.classList.remove('is-scrolled'); }
      avisoOffset(y);
      parallax(y);
      ticking = false;
    });
  }

  /* ---------- Parallax muy leve (solo donde la página lo pide con [data-parallax]) ---------- */
  var plxBox = d.querySelector('[data-parallax]');
  var plxImg = plxBox ? plxBox.querySelector('img') : null;
  var wide = window.matchMedia('(min-width: 901px)');
  function parallax(y) {
    if (!plxImg) return;
    if (reduce.matches || !wide.matches) { plxImg.style.translate = ''; return; }
    var cap = plxBox.offsetHeight * 0.05;
    var v = Math.min(y * 0.05, cap);
    plxImg.style.translate = '0 ' + v.toFixed(1) + 'px';
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();

  /* ---------- Apariciones al hacer scroll ---------- */
  if (reduce.matches || !('IntersectionObserver' in window) || h.classList.contains('no-anim')) {
    h.classList.add('no-anim');
    return;
  }
  h.classList.add('anim');

  var fast = window.matchMedia('(max-width: 760px)').matches;
  var STEP = fast ? 60 : 90;
  var UNIT = fast ? 70 : 110;
  function cleanup(el, ms) {
    window.setTimeout(function () {
      el.removeAttribute('data-reveal');
      el.removeAttribute('data-line');
      el.removeAttribute('data-delay');
      el.classList.remove('is-in');
      el.style.removeProperty('--d');
    }, ms);
  }

  function show(el) {
    if (el.hasAttribute('data-stagger')) {
      var kids = [].slice.call(el.children);
      kids.forEach(function (k, i) {
        k.style.setProperty('--d', Math.min(i, 8) * STEP + 'ms');
        k.classList.add('is-in');
      });
      window.setTimeout(function () {
        el.removeAttribute('data-stagger');
        kids.forEach(function (k) {
          k.classList.remove('is-in');
          k.style.removeProperty('--d');
        });
      }, Math.min(kids.length, 9) * STEP + 1800);
      return;
    }
    var n = parseInt(el.getAttribute('data-reveal'), 10);
    var delay = el.hasAttribute('data-delay')
      ? parseInt(el.getAttribute('data-delay'), 10) || 0
      : (isNaN(n) ? 0 : n * UNIT);
    el.style.setProperty('--d', delay + 'ms');
    el.classList.add('is-in');
    cleanup(el, delay + 1900);
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      show(e.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

  [].slice.call(d.querySelectorAll('[data-reveal],[data-line],[data-stagger]')).forEach(function (el) {
    io.observe(el);
  });

  /* Dibujos de una sola vez: [data-draw] recibe .is-drawn al entrar en pantalla y ya no se vuelve a observar. */
  var drawIo = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      drawIo.unobserve(e.target);
      e.target.classList.add('is-drawn');
    });
  }, { threshold: 0.15 });
  [].slice.call(d.querySelectorAll('[data-draw]')).forEach(function (el) { drawIo.observe(el); });

  /* Si el usuario activa "reducir movimiento" a mitad de visita, se muestra todo. */
  function revealAll() {
    h.classList.add('no-anim');
    h.classList.remove('anim');
    if (plxImg) plxImg.style.translate = '';
  }
  if (reduce.addEventListener) reduce.addEventListener('change', function () { if (reduce.matches) revealAll(); });
})();

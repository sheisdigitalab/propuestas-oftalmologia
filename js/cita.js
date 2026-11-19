/* Selector de huecos de la caja de cita (maqueta): marca el día elegido y prepara el mensaje de WhatsApp. */
(function () {
  'use strict';
  [].slice.call(document.querySelectorAll('.days')).forEach(function (box) {
    var cta = box.parentElement.querySelector('[data-cita]');
    var days = [].slice.call(box.querySelectorAll('button'));
    var tel = (cta && cta.getAttribute('data-tel')) || '34600000000';
    function pick(btn) {
      days.forEach(function (b) {
        var on = b === btn;
        b.classList.toggle('on', on);
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      if (!cta) return;
      var d = btn.getAttribute('data-d'), h = btn.getAttribute('data-h');
      var label = cta.querySelector('[data-label]') || cta;
      label.textContent = 'Pedir cita · ' + d + ' ' + h;
      cta.href = 'https://wa.me/' + tel + '?text=' + encodeURIComponent('Hola, quisiera pedir cita el ' + d + ' a las ' + h + '.');
    }
    days.forEach(function (b) { b.addEventListener('click', function () { pick(b); }); });
    var first = box.querySelector('button.on') || days[0];
    if (first) pick(first);
  });
})();

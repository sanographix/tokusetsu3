// Add target="_blank" when user opens external link
(function() {
  var a = document.querySelectorAll('a');
  for (var i = 0; i < a.length; i++) {
    if (a[i].host !== location.host) {
      a[i].setAttribute('target', '_blank');
    }
  }
}());

(function() {
  var samples = document.querySelectorAll('.bookSample-content');
  var lightboxes = document.querySelectorAll('.bookSample-lightbox');
  if (samples.length < 1) { return false; }
  Array.prototype.forEach.call(samples, function (sampleElem) {
    sampleElem.addEventListener('click', function () {
      var sampleIndex = sampleElem.dataset['index'];
      var lightbox = document.querySelector('.bookSample-lightbox[data-index="' + sampleIndex + '"]');
      lightbox.classList.add('is-open');
      document.body.classList.add('is-open');
    });
  });
  Array.prototype.forEach.call(lightboxes, function (lightboxElem) {
    lightboxElem.addEventListener('click', function () {
      lightboxElem.classList.remove('is-open');
      document.body.classList.remove('is-open');
    })
  })
})();

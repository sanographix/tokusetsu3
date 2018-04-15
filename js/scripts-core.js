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
  if(sampleLen != 0) {

    var sampleLen = document.querySelectorAll('.bookSample-content').length;
    var sample = [];
    var lightbox = [];

    for (var i = 0; i < sampleLen; i++) {
      sample[sample.length] = document.querySelector('.bookSample-content' + CSS.escape(i + 1));
      lightbox[lightbox.length] = document.querySelector('.bookSample-lightbox' + CSS.escape(i + 1));
      (function(n) {
        sample[n].addEventListener("click", function() {
          lightbox[n].classList.add('is-open');
          document.body.classList.add('is-open');
        });
        lightbox[n].addEventListener("click", function() {
          this.classList.remove('is-open');
          document.body.classList.remove('is-open');
        });
      })(i);
    }
  }
}());

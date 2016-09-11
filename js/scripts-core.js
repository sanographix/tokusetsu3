// Add target="_blank" when user opens external link
(function() {
  var a = document.querySelectorAll('a');
  for (var i = 0; i < a.length; i++) {
    if (a[i].host !== location.host) {
      a[i].setAttribute('target', '_blank');
    }
  }
}());

var sample1 = document.querySelector('.bookSample-content1');
var sample2 = document.querySelector('.bookSample-content2');
var sample3 = document.querySelector('.bookSample-content3');
var sample4 = document.querySelector('.bookSample-content4');
var sample5 = document.querySelector('.bookSample-content5');
var sample6 = document.querySelector('.bookSample-content6');
var lightbox1 = document.querySelector('.bookSample-lightbox1');
var lightbox2 = document.querySelector('.bookSample-lightbox2');
var lightbox3 = document.querySelector('.bookSample-lightbox3');
var lightbox4 = document.querySelector('.bookSample-lightbox4');
var lightbox5 = document.querySelector('.bookSample-lightbox5');
var lightbox6 = document.querySelector('.bookSample-lightbox6');

sample1.addEventListener("click", function() {
    lightbox1.classList.toggle('is-open');
    document.body.classList.toggle('is-open');
});
lightbox1.addEventListener("click", function() {
    this.classList.remove('is-open');
    document.body.classList.remove('is-open');
});

sample2.addEventListener("click", function() {
    lightbox2.classList.toggle('is-open');
    document.body.classList.toggle('is-open');
});
lightbox2.addEventListener("click", function() {
    this.classList.remove('is-open');
    document.body.classList.remove('is-open');
});

sample3.addEventListener("click", function() {
    lightbox3.classList.toggle('is-open');
    document.body.classList.toggle('is-open');
});
lightbox3.addEventListener("click", function() {
    this.classList.remove('is-open');
    document.body.classList.remove('is-open');
});

sample4.addEventListener("click", function() {
    lightbox4.classList.toggle('is-open');
    document.body.classList.toggle('is-open');
});
lightbox4.addEventListener("click", function() {
    this.classList.remove('is-open');
    document.body.classList.remove('is-open');
});

sample5.addEventListener("click", function() {
    lightbox5.classList.toggle('is-open');
    document.body.classList.toggle('is-open');
});
lightbox5.addEventListener("click", function() {
    this.classList.remove('is-open');
    document.body.classList.remove('is-open');
});

sample6.addEventListener("click", function() {
    lightbox6.classList.toggle('is-open');
    document.body.classList.toggle('is-open');
});
lightbox6.addEventListener("click", function() {
    this.classList.remove('is-open');
    document.body.classList.remove('is-open');
});

// Add target="_blank" when user opens external link
(function() {
  var a = document.querySelectorAll('a');
  for (var i = 0; i < a.length; i++) {
    if (a[i].host !== location.host) {
      a[i].setAttribute('target', '_blank');
    }
  }
}());

// Survey Modal
(function() {
  var overlay = document.getElementById('surveyModalOverlay');
  if (!overlay) return;

  var modalSurvey = document.getElementById('modalSurvey');
  var modalGetStarted = document.getElementById('modalGetStarted');
  var startBtns = document.querySelectorAll('.start-btn');
  var btnAnswer = document.getElementById('btnAnswerSurvey');
  var btnSkip = document.getElementById('btnSkipSurvey');

  function openModal() {
    overlay.classList.add('is-active');
  }

  function showGetStarted() {
    modalSurvey.style.display = 'none';
    modalGetStarted.style.display = 'block';
  }

  for (var i = 0; i < startBtns.length; i++) {
    startBtns[i].addEventListener('click', function(e) {
      e.preventDefault();
      openModal();
    });
  }

  btnAnswer.addEventListener('click', function() {
    showGetStarted();
  });

  btnSkip.addEventListener('click', function() {
    showGetStarted();
  });
}());

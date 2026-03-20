// Add target="_blank" when user opens external link
(function() {
  var a = document.querySelectorAll('a');
  for (var i = 0; i < a.length; i++) {
    if (a[i].host !== location.host) {
      a[i].setAttribute('target', '_blank');
    }
  }
}());

// CTA Dropdown Panel
(function() {
  var panel = document.getElementById('ctaPanel');
  if (!panel) return;

  var panelSurvey = document.getElementById('ctaPanelSurvey');
  var panelGetStarted = document.getElementById('ctaPanelGetStarted');
  var startBtns = document.querySelectorAll('.start-btn');
  var btnAnswer = document.getElementById('btnAnswerSurvey');
  var btnSkip = document.getElementById('btnSkipSurvey');

  function openPanel(triggerBtn) {
    var rect = triggerBtn.getBoundingClientRect();
    panel.style.top = (rect.bottom + window.scrollY + 8) + 'px';
    panel.style.left = (rect.left + rect.width / 2) + 'px';
    panelSurvey.style.display = '';
    panelGetStarted.style.display = 'none';
    panel.classList.add('is-active');
  }

  function showGetStarted() {
    panelSurvey.style.display = 'none';
    panelGetStarted.style.display = 'block';
  }

  for (var i = 0; i < startBtns.length; i++) {
    startBtns[i].addEventListener('click', function(e) {
      e.preventDefault();
      openPanel(this);
    });
  }

  btnAnswer.addEventListener('click', function() {
    showGetStarted();
  });

  btnSkip.addEventListener('click', function() {
    showGetStarted();
  });
}());

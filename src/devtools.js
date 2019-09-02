fetch("devtools.css")
  .then(res => res.text())
  .then(data => {
    chrome.devtools.panels.applyStyleSheet(data);
  });

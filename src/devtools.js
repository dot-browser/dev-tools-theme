fetch("devtools.css")
  .then(res => res.text())
  .then(data => {
    chrome.devtools.panels.applyStyleSheet(data);
    console.log(chrome.devtools);
    chrome.devtools.panels.setOpenResourceHandler(resource, () => {
      console.log(resource);
    });
  });

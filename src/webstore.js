window.onload = () => {
  chrome.runtime.onMessage.addListener(request => {
    if (request.action === "install") gist();
  });
};

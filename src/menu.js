chrome.contextMenus.create({
  title: "Install Extension",
  documentUrlPatterns: ["https://chrome.google.com/webstore/detail/*"],
  onclick: (_, tab) => chrome.tabs.sendMessage(tab.id, {action: "install"}),
});

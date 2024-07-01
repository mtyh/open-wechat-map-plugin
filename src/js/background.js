
function updateIcon(tabId, changeInfo, tab) {
	if (changeInfo.status === 'complete' && tab.url) {
	  if (tab.url.includes("mp.weixin.qq.com/s/")) {
		chrome.action.setIcon({
		  tabId: tabId,
		  path: "/img/acti.png"
		});
	  } else {
		chrome.action.setIcon({
		  tabId: tabId,
		  path: "/img/rest.png"
		});
	  }
	}
  }
  chrome.tabs.onUpdated.addListener(updateIcon);
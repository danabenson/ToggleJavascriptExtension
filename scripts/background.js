
function goToCache(tab) {
    console.log('going to cache');
    chrome.tabs.create({ url: getCacheUrl(tab.url) });
}

function getCacheUrl(tabUrl) {
    var url = 'http://webcache.go' + 'ogleusercontent.com/search?q=cache:' + tabUrl;
    //console.log(url);
    return url;
}

chrome.browserAction.onClicked.addListener(goToCache);
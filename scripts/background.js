
var jsType = 'javascript';

function toggleJavaScript(tab) {
    console.log('toggling javascript');
    var d = getDetails(tab.url);
    var setting = chrome.contentSettings[jsType].get(d, function (details) {
        gotSetting(details, tab.url)
    });
}

function gotSetting(details, url) {
    if (details) {
        console.log(details);
        setJavaScript(details.setting == 'allow' ? false : true, url);
    }
    else {
        console.log('failed to get setting');
    }
}

function getDetails(url) {
    var details = {
        primaryUrl: url
    };
    return details;
}

function setJavaScript(isEnabled) {
    var details = {
        primaryPattern: '<all_urls>',
        setting: isEnabled ? 'allow' : 'block'
    };
    console.log('setting javascript to ' + details.setting);
    chrome.contentSettings[jsType].set(details);
}

chrome.browserAction.onClicked.addListener(toggleJavaScript);

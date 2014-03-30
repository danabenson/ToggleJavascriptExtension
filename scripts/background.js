
var jsType = 'javascript';

function toggleJavaScript(tab) {
    //console.log('toggling javascript');
    var d = getDetails(tab.url);
    var setting = chrome.contentSettings[jsType].get(d, function (details) {
        gotSetting(details, tab.url)
    });
}

function gotSetting(details, url) {
    if (details) {
       // console.log(details);
        setJavaScript(details.setting == 'allow' ? false : true, url);
    }
    else {
      //  console.log('failed to get setting');
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
    //console.log('setting javascript to ' + details.setting);
    chrome.contentSettings[jsType].set(details);
    setIcon(isEnabled);
}

function setIcon(isEnabled) {
    var image = isEnabled ? 'icon19.png' : 'icon19_block.png';
    chrome.browserAction.setIcon({
        path: 'images/' + image
    });
    //var canvas = document.getElementById('canvas
    //var context = canvas.getContext('2d');');
    // ...draw to the canvas...
    //context.drawImage('images/' + image);
    //var imageData = context.getImageData(0, 0, 19, 19);
    //chrome.browserAction.setIcon({
      //  imageData: imageData
    //});

}

chrome.browserAction.onClicked.addListener(toggleJavaScript);

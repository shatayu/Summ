function popup() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "start"});
    });
    chrome.tabs.create({ url: "options.html" });
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("stop").addEventListener("click", popup);
});
/**
 * Created by justinhoyt on 1/24/16.
 */
chrome.runtime.onMessage.addListener(function (msg, sender) {
    // First, validate the message's structure
    if ((msg.from === 'content') && (msg.subject === 'reload')) {
        chrome.storage.sync.set(
            {refreshed: true},
            function(){
                chrome.tabs.reload();
            }
        );
    }
});
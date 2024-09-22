document.getElementById('onButton').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            function: toggleDesignMode,
            args: ['on']
        });
    });
});

document.getElementById('offButton').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            function: toggleDesignMode,
            args: ['off']
        });
    });
});

function toggleDesignMode(state) {
    document.designMode = state === 'on' ? 'on' : 'off';
}
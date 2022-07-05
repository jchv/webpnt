chrome.webRequest.onBeforeSendHeaders.addListener(
    (e) => {
        for (let header of e.requestHeaders) {
            if (header.name.toLowerCase() === 'accept') {
                header.value = header.value.replace('image/avif,', '')
                header.value = header.value.replace('image/webp,', '')
            }
        }
        return { requestHeaders: e.requestHeaders };
    },
    { urls: ['<all_urls>'] },
    ['blocking', 'requestHeaders']
);

// Could also outright block requests for stuff like HTML5 picture,
// but this will probably break things.

// chrome.webRequest.onHeadersReceived.addListener(
//     (e) => {
//         for (let header of e.responseHeaders) {
//             if (header.name.toLowerCase() === 'content-type') {
//                 if (header.value.toLowerCase().includes('image/webp')) {
//                     return { cancel: true };
//                 }
//             }
//         }
//     },
//     { urls: ['<all_urls>'] },
//     ['blocking', 'responseHeaders']
// );

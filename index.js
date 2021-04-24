console.log('index.js !');
if ('serviceWorker' in navigator) {   // 檢查browser有無支援serviceWorker
    navigator.serviceWorker.register('/sw.js').then(function () {   // register會回傳一個Promise
        console.log('Service worker registered!');
    });
}
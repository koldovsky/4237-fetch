const headerClock = document.querySelector('.header__clock');

function updateClock() {
    headerClock.innerText = new Date().toLocaleTimeString('uk');
}

setInterval(updateClock, 1000);
updateClock();
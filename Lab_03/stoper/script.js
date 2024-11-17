let minutnik = document.getElementById('minutnik');
let sekundy = 0
let interval = null

minutnik.textContent = 0 + "s"


function start() {
    if (interval == null) {
        interval = setInterval(() => {
            sekundy += 1
            printTime()
        }, 1000)
    }
}

function stop() {
    clearInterval(interval)
    interval = null
}

function reset() {
    stop()
    sekundy = 0
    printTime()
}

function printTime() {
    if (sekundy < 60) {
        minutnik.textContent = sekundy + "s"
    } else if (sekundy < 3600) {
        minutnik.textContent = Math.floor(sekundy / 60) + "min " + sekundy % 60 + "s"
    }
}
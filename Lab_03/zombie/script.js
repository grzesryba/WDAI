let query = document.querySelector("body");

let heart_div = document.getElementById("hearts")
let full1 = document.createElement("img")
let full2 = document.createElement("img")
let full3 = document.createElement("img")
full1.src = "full_heart.png"
full2.src = "full_heart.png"
full3.src = "full_heart.png"
heart_div.appendChild(full1)
heart_div.appendChild(full2)
heart_div.appendChild(full3)
let h = [full1, full2, full3]

let points = 100
let point_div = document.getElementById("points")
point_div.textContent = points

document.addEventListener("click", f, false)
let n = 0
zombieWidth = 200
zombieHeight = 312
let zombies = []
let hearts = 3


function startSettings(){
    heart_div.appendChild(full1)
    heart_div.appendChild(full2)
    heart_div.appendChild(full3)
    h = [full1, full2, full3]
    points = 100
    point_div.textContent = points
    zombies = []
    hearts = 3
    n = 0
}


function drawZombie(img, canvas, ctx, frame, scale) {
    ctx.clearRect(0, 0, canvas.width * scale*2, canvas.height * scale*2);
    let sx = frame * 200;
    let sy = 0;
    ctx.drawImage(img, sx, sy, zombieWidth, zombieHeight, 0, 0, zombieWidth * scale, zombieHeight * scale);
}

function createZombie(scale,y_margin, tempo) {
    let y = zombieHeight * scale + y_margin
    let x = window.innerWidth
    let elem = document.createElement('canvas');
    let id = "zombie" + n
    n += 1
    let zombie = {
        elem: elem,
        x: x,
        y: window.innerHeight - zombieHeight * scale - y_margin,
        width: zombieWidth * scale,
        height: zombieHeight * scale,
        tempo: tempo,
        death: false
    }
    zombies = zombies.concat(zombie)
    elem.className = "zombie"
    elem.id = id;
    elem.width = zombieWidth * scale;
    elem.height = zombieHeight * scale;
    elem.style.left = "100vw"
    elem.style.bottom = y - zombieHeight * scale + "px"
    query.appendChild(elem);
    let frame = 0;
    let canvas = document.getElementById(id);
    let ctx = canvas.getContext("2d");
    let img = new Image();
    img.src = "walkingdead.png";
    img.onload = function () {
        let intervalId = setInterval(() => {
            drawZombie(img, canvas, ctx, frame, scale)
            frame += 1
            frame = frame % 10
            x -= 20
            zombie.x -= 20
            elem.style.left = `calc(${x}px)`
            if (zombie.x < (-(zombieWidth * scale))) {
                if (zombie.death) {
                    clearInterval(intervalId)
                } else {
                    hearts -= 1
                    heart_div.removeChild(h[hearts])
                    let empty = document.createElement("img")
                    empty.src = "empty_heart.png"
                    heart_div.appendChild(empty)
                    clearInterval(intervalId)
                }
            }
        }, tempo);
    }
}
function endScreen(){
    let body = document.querySelector("body")
    heart_div.remove()
    point_div.remove()
    body.style.backgroundImage = "none"
    body.style.backgroundColor = "black"
    body.style.cursor = "auto"
    let h1 = document.createElement("h1")
    let h2 = document.createElement("h2")
    let button_div = document.createElement("div")
    let button = document.createElement("button")
    h1.textContent = "THE END"
    h2.textContent = "YOUR SCORE: " + points
    button.textContent = "PLAY AGAIN"
    h1.className = "endScreen"
    h2.className = "endScreen"
    button.className = "endScreen"
    button_div.id = "button_div"
    body.appendChild(h1)
    body.appendChild(h2)
    button_div.appendChild(button)
    body.appendChild(button_div)

    button.addEventListener("click", () => {
        body.innerHTML = ""
        document.location.reload()
    })

}

function game() {
    if (hearts > 0) {
        let scale = Math.random() * 2 + 0.5
        let y = Math.random()*75    
        let tempo = Math.random() * 80 + 15
        createZombie(scale,y, tempo)

        let timeout = Math.random() * 1000 + 1000
        setTimeout(game, timeout)
    } else {
        for (let i = 0; i < zombies.length; i++) {
            zombies[i].elem.style.display = "none"
        }
        endScreen()
        // alert(points)
    }
}

function f(e) {
    let flag = false
    for (let i = zombies.length-1; i >=0 ; i--) {
        let relativeX = e.clientX - zombies[i].x
        let relativeY = e.clientY - zombies[i].y
        if (0 <= relativeX && relativeX <= zombies[i].width && 0 <= relativeY && relativeY <= zombies[i].height && points>0 && !zombies.death) {
            points += 20
            point_div.textContent = points
            zombies[i].death = true
            zombies[i].elem.style.display = "none"
            zombies = zombies.filter(x => x!==zombies[i])
            flag = true
            break
        }
    }
    if (!flag && points>0) {
        points -= 5
        point_div.textContent = points
    }

}

game()
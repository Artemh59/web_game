const mamont = document.getElementById("mamont");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function(event) {
    jump();
});

function jump () {
    if (mamont.classList != "jump") {
        mamont.classList.add("jump")
    }
    setTimeout (function () {
        mamont.classList.remove("jump")
    }, 300)
}

let isAlive = setInterval (function(){
    let mamontTop = parseInt(window.getComputedStyle(mamont).getPropertyValue("top"))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

    if (cactusLeft < 50 && cactusLeft > 0 && mamontTop >= 140) {
        alert("ebat' ty lox😨")
    }
}, 10)

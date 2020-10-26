var hidden = false;
var animationSpeed = 300;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function introAnimation() {
    var text = "Page Not Found"
    document.getElementById("cursor").style.display = "inline";
    document.getElementById("subtext").innerHTML = "";

    await sleep(250);

    for (var i = 0; i < text.length + 1; i++) {
        await sleep(80);
        document.getElementById("subtext").innerHTML = text.substring(0, i);
        var right = document.getElementById("subtext").getBoundingClientRect().right;
        var left = document.getElementById("subtext").getBoundingClientRect().left;
        document.getElementById("cursor").style.left = (right - left) + "px";
    }

    cursor();
}

function cursor() {
    cursorOn = true;

    var right = document.getElementById("subtext").getBoundingClientRect().right;
    var left = document.getElementById("subtext").getBoundingClientRect().left;
    document.getElementById("cursor").style.left = (right - left) + 5 + "px";

    window.setInterval(function () {
        cursorOn = !cursorOn;
        document.getElementById("cursor").style.display = cursorOn ? "inline" : "none";
    }, 800);
}

window.addEventListener("load", introAnimation);
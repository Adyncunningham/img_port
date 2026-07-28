const dvd = document.querySelector(".DVD");
const music = document.querySelector("#music");

let x = 100;
let y = 100;

let dx = 3;
let dy = 3;

let hue = 0;

music.volume = 0.5;

// Browsers block autoplay, so start after a click
document.addEventListener("click", () => {
    music.play();
});

function changeColor() {
    hue += 60;

    if (hue >= 360) {
        hue = 0;
    }

    dvd.style.filter = `hue-rotate(${hue}deg)`;
}

function animate() {
    const dvdWidth = dvd.offsetWidth;
    const dvdHeight = dvd.offsetHeight;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    x += dx;
    y += dy;

    if (x <= 0 || x + dvdWidth >= screenWidth) {
        dx *= -1;
        changeColor();
    }

    if (y <= 0 || y + dvdHeight >= screenHeight) {
        dy *= -1;
        changeColor();
    }

    dvd.style.left = x + "px";
    dvd.style.top = y + "px";

    requestAnimationFrame(animate);
}

animate();
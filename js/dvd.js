const dvd = document.querySelector(".DVD");

let x = 100;
let y = 100;

let dx = 3; // Horizontal speed
let dy = 3; // Vertical speed

let hue = 0;

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

    // Bounce off left/right walls
    if (x <= 0 || x + dvdWidth >= screenWidth) {
        dx *= -1;
        changeColor();
    }

    // Bounce off top/bottom walls
    if (y <= 0 || y + dvdHeight >= screenHeight) {
        dy *= -1;
        changeColor();
    }

    dvd.style.left = x + "px";
    dvd.style.top = y + "px";

    requestAnimationFrame(animate);
}

animate();
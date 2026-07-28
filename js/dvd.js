

const dvd = document.querySelector(".DVD");

let x = 100;
let y = 100;

let dx = 3; // Horizontal speed
let dy = 3; // Vertical speed

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
    }

    // Bounce off top/bottom walls
    if (y <= 0 || y + dvdHeight >= screenHeight) {
        dy *= -1;
    }

    dvd.style.left = x + "px";
    dvd.style.top = y + "px";

    requestAnimationFrame(animate);
}

animate();
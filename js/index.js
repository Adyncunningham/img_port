
const canvas = document.getElementById("rain");

if (canvas) {

    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let rainDrops = [];

    const rainCount = 250;

    for (let i = 0; i < rainCount; i++) {
        rainDrops.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            length: Math.random() * 20 + 10,
            speed: Math.random() * 5 + 4
        });
    }


    function drawRain() {

        // dark transparent layer for fading trails
        ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);


        for (let i = 0; i < rainDrops.length; i++) {

            let drop = rainDrops[i];

            // grey rain color
            ctx.strokeStyle = "rgba(180, 180, 180, 0.5)";
            ctx.lineWidth = 1;

            ctx.beginPath();

            ctx.moveTo(drop.x, drop.y);
            ctx.lineTo(drop.x - 2, drop.y + drop.length);

            ctx.stroke();


            // move rain down
            drop.y += drop.speed;


            // reset when rain reaches bottom
            if (drop.y > canvas.height) {

                drop.y = -20;
                drop.x = Math.random() * canvas.width;

            }
        }
    }


    setInterval(drawRain, 30);



    window.addEventListener("resize", () => {

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

    });

}

const rainSound = document.getElementById("rainSound");

if (rainSound) {

    rainSound.volume = 0.3;

    document.addEventListener("click", () => {
        rainSound.play();
    }, { once: true });

}
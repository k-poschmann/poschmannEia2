"use strict";
var L09_Asteroid;
(function (L09_Asteroid) {
    window.addEventListener("load", handleLoad);
    let asteroids = [];
    function handleLoad(_event) {
        console.log("Asteroids starting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_Asteroid.crc2 = canvas.getContext("2d");
        L09_Asteroid.crc2.fillStyle = "black";
        L09_Asteroid.crc2.strokeStyle = "white";
        L09_Asteroid.crc2.fillRect(0, 0, L09_Asteroid.crc2.canvas.width, L09_Asteroid.crc2.canvas.height);
        L09_Asteroid.createPaths();
        console.log("Asteroids paths:", L09_Asteroid.asteroidPaths);
        createAsteroids(5);
        // createShip();
        // canvas.addEventListener("mousedown", loadTaser);
        canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventListener("keypress", handleKeypress);
        // canvas.addEventListener("mousemove", setHeading);
        window.setInterval(update, 20);
    }
    function shootLaser(_event) {
        console.log("Shoot Laser");
        let hotspot = new L09_Asteroid.Vector(_event.clientX - L09_Asteroid.crc2.canvas.offsetLeft, _event.clientY - L09_Asteroid.crc2.canvas.offsetTop);
        let asteroidHit = getAsteroidHit(hotspot);
        console.log(asteroidHit);
        if (asteroidHit)
            breakAsteroid(asteroidHit);
    }
    function getAsteroidHit(_hotspot) {
        for (let asteroid of asteroids) {
            if (asteroid.isHit(_hotspot))
                return asteroid;
        }
        return null;
    }
    function breakAsteroid(_asteroid) {
        if (_asteroid.size > 0.3) {
            for (let i = 0; i < 2; i++) {
                let fragment = new L09_Asteroid.Asteroid(_asteroid.size / 2, _asteroid.position);
                fragment.velocity.add(_asteroid.velocity);
                asteroids.push(fragment);
            }
        }
        let index = asteroids.indexOf(_asteroid);
        asteroids.splice(index, 1);
    }
    function createAsteroids(_nAsteroids) {
        console.log("Create Asteroids");
        for (let i = 0; i < _nAsteroids; i++) {
            let asteroid = new L09_Asteroid.Asteroid(1.0);
            asteroids.push(asteroid);
        }
    }
    function update() {
        console.log("update");
        L09_Asteroid.crc2.fillRect(0, 0, L09_Asteroid.crc2.canvas.width, L09_Asteroid.crc2.canvas.height);
        for (let asteroid of asteroids) {
            asteroid.move(1 / 50);
            asteroid.draw();
        }
        // ship.draw();
        // handleCollisions();
    }
})(L09_Asteroid || (L09_Asteroid = {}));
//# sourceMappingURL=Main.js.map
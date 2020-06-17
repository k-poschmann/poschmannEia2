"use strict";
var L09_Asteroid;
(function (L09_Asteroid) {
    class Asteroid {
        constructor(_size, _position) {
            console.log("Asteroid Constructor");
            if (_position)
                this.position = _position;
            else
                this.position = new L09_Asteroid.Vector(0, 0);
            this.velocity = new L09_Asteroid.Vector(0, 0);
            this.velocity.random(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
        move(_timeslice) {
            // console.log("Asteroid Move");
            let offset = new L09_Asteroid.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L09_Asteroid.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L09_Asteroid.crc2.canvas.height;
            if (this.position.x > L09_Asteroid.crc2.canvas.width)
                this.position.x -= L09_Asteroid.crc2.canvas.width;
            if (this.position.y > L09_Asteroid.crc2.canvas.height)
                this.position.y -= L09_Asteroid.crc2.canvas.height;
        }
        draw() {
            // console.log("Asteroid draw");
            L09_Asteroid.crc2.save();
            L09_Asteroid.crc2.translate(this.position.x, this.position.y);
            L09_Asteroid.crc2.scale(this.size, this.size);
            L09_Asteroid.crc2.translate(-50, -50);
            L09_Asteroid.crc2.stroke(L09_Asteroid.asteroidPaths[this.type]);
            L09_Asteroid.crc2.restore();
        }
        isHit(_hotspot) {
            let hitsize = 50 * this.size;
            let difference = new L09_Asteroid.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }
    }
    L09_Asteroid.Asteroid = Asteroid;
})(L09_Asteroid || (L09_Asteroid = {}));
//# sourceMappingURL=Asteroid.js.map
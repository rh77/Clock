'use strict';

let clock = {
    _timeout: null, 

    _render() {
        let now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();

        let angleSecond = seconds * 6;
        let angleMinute = (minutes + seconds / 60) * 6;
        let angleHour = (hours + minutes / 60) * 30;

        rotateArrow(this._arrowElementSecond, angleSecond);
        rotateArrow(this._arrowElementMinute, angleMinute);
        rotateArrow(this._arrowElementHour, angleHour);

        function rotateArrow(arrowElement, angle) {

            let arrowTransformation = `rotate(${angle}deg)`;
            arrowElement.style.transform = arrowTransformation;
            arrowElement.style.WebkitTransform = arrowTransformation;
            arrowElement.style.MsTransform = arrowTransformation;
        }
    },
    
    start() {
        this._render();
        this._timeout = setInterval(() => {
            this._render()
        }, 1000);
    },
    
    stop() {
        clearInterval(this._timeout);    
    },
    
    init(){
      this._arrowElementHour = document.getElementById("arrow-hour");
      this._arrowElementMinute = document.getElementById("arrow-minute");
      this._arrowElementSecond = document.getElementById("arrow-second");
      document.getElementById("clock").style.display = "block";
    }
};

clock.init();
clock.start();
/*
setTimeout(function () {
    clock.stop();
}, 50000)
*/
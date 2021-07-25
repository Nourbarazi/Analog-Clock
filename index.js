const handHour = document.querySelector(".hand-hour");
const handMin = document.querySelector(".hand-min");
const handSec = document.querySelector(".hand-sec");


function setDate() {
    const now = new Date();
    
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    handSec.style.transform = `rotate(${secondsDegrees}deg)`;

    const minu = now.getMinutes();
    const minuDegrees = ((minu / 60) * 360) + ((seconds / 60) * 6) + 90;
    handMin.style.transform = `rotate(${minuDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + ((minu / 60) * 30) + 90;
    handHour.style.transform = `rotate(${hoursDegrees}deg)`;
}


setInterval(setDate, 1000);
setDate();


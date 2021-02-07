let Chour = document.querySelector('.hour');
let Cmin = document.querySelector('.min');
let Csec = document.querySelector('.sec');
let sec2 = document.querySelector('.sec2');

const hEl = document.getElementById('hour');
const mEl = document.getElementById('min');
const sEl = document.getElementById('sec');
setInterval(() => {
    const d = new Date();
    const h = d.getHours() * 30 + d.getMinutes() / 2;
    const m = d.getMinutes() * 6 + d.getSeconds() * (360 / 3600);
    const s = d.getSeconds() * 6;

    Chour.style.transform = `rotate(${h}deg)`
    Cmin.style.transform = `rotate(${m}deg)`
    Csec.style.transform = `rotate(${s}deg)`
    sec2.style.transform = `rotate(${s}deg)`
    hEl.textContent = d.getHours();
    mEl.textContent = d.getMinutes();
    sEl.textContent = d.getSeconds();
})

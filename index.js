const starttime = 10;
let totaltime = starttime * 60;

const myelement = document.getElementById('countdown');

setInterval(() => {
    const minutes = Math.floor(totaltime/60);
    let seconds = totaltime % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    myelement.innerHTML = `${minutes}:${seconds}`;

    totaltime--;
}, 1000);
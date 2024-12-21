function digitalClock(){

    const now = new Date();
    
    let hours = now.getHours().toString().padStart(2, 0);
    let minutes = now.getMinutes().toString().padStart(2, 0);
    let seconds= now.getSeconds().toString().padStart(2, 0);
    let milliseconds = now.getMilliseconds().toString().padStart(3, 0);

    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

digitalClock();
setInterval(digitalClock, 1000);
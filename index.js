const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');


const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 1 ${currentYear + 1}  00:00:00`);

function updateCountdowntime(){
    const currentTime = new Date();
    const diff = newYearTime - currentTime;
      

    //const day = Math.floor(diff/1000/60/60/24)
    const hour= Math.floor(diff/1000/60/60) % 24;
    const min= Math.floor(diff/1000/60) % 60; 
    const sec = Math.floor(diff/1000) % 60;
  



 
    hours.innerHTML = hour < 10 ? '0' + hour : hour;
    minutes.innerHTML = min < 10 ? '0' + min : min;
    seconds.innerHTML = sec < 10 ? '0' + sec : sec;
 
}

setInterval(updateCountdowntime, 1000)

const hourEl = document.querySelector('.hour');
const minEl = document.querySelector('.minute');
const secEl = document.querySelector('.secs');
const dateEl = document.querySelector('.date ');
const timeEl = document.querySelector('.time');
const themeEl = document.querySelector('.theme');

const days = ['Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday','Saturday' ,'Sunday'] ;
const months =['Jan' , 'Feb' ,'Mar' ,'Apr' ,'May' ,'Jun', 'Jul' , 'Aug' , 'Sept','Oct' , 'Nov' , 'Dec'];

themeEl.addEventListener('click' , (e) => {
    const html = document.querySelector('html');
    if(html.classList.contains('dark')){
        html.classList.remove('dark');
        e.target.innerHTML =  'DarK Mode';
    }
    else{
        html.classList.add('dark');
        e.target.innerHTML =  'Light Mode';
    }
}) 

function SetTime(){
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const minute = time.getMinutes();
    const secs = time.getSeconds();
    const hoursForClock = hours % 12; 
    const ampm = hours >=12 ? 'PM' : 'AM'
    hourEl.style.transform = `translate(-50%,-100%) rotate(${scale(hoursForClock,0,11,0,360)}deg)`
    minEl.style.transform = `translate(-50%,-100%) rotate(${scale(minute,0,59,0,360)}deg)`
    secEl.style.transform = `translate(-50%,-100%) rotate(${scale(secs,0,59,0,360)}deg)`
    console.log(time);
    timeEl.innerHTML = `${hoursForClock}:${minute < 10? `0${minute}` : minute} ${ampm}`
    dateEl.innerHTML = `${days[day]} , ${months[month]}<span class="circle">${date}</span>`
}
const scale = (num , in_min , in_max, out_min, out_max) => {
    return (num - in_min)*(out_max - out_min)/(in_max - in_min) + out_min;
}
SetTime()
setInterval(SetTime , 1000)


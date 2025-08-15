const starStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');
let intervalid ;
let secound = 0;
let minutes = 0;
let hours = 0;

let Leadingsecound = 0;
let Leadingminutes = 0;
let Leadinghours = 0;

function StopWatch()
{
    console.log("Fuck")
    secound++
    if(secound/60===1)
    {
        secound = 0;
        minutes++;
        if(minutes/60===1)
        {
            minutes=0;
            hours++;
        }
    }

    if(secound<10)
        Leadingsecound='0'+secound;
    else
        Leadingsecound = secound;
    if(minutes<10)
        Leadingminutes='0'+minutes;
    else
        Leadingminutes = minutes;
     if(hours<10)
        Leadinghours='0'+hours;
    else
        Leadinghours = hours;


    document.querySelector('#Timer').innerText = Leadinghours +":" + Leadingminutes + ":" + Leadingsecound;

}



starStopBtn.addEventListener('click',function()
{
    debugger;
    if(starStopBtn.textContent.trim() =='play')
     {
        starStopBtn.textContent ='Stop';
        intervalid =  window.setInterval(StopWatch,10)
    }

    else
    {
        starStopBtn.textContent ='play';
        window.clearInterval(intervalid);
    }

})
resetBtn.addEventListener('click',function()
{
    starStopBtn.textContent ='play';
    window.clearInterval(intervalid);
    secound = 0;
    minutes = 0;
    hours = 0;

    document.querySelector('#Timer').innerText ="00:00:00";

})

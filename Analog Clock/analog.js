const secondhand=document.getElementById("secondhand");
const minutehand=document.getElementById("minutehand");
const hourhand=document.getElementById("hourhand");

setInterval((function clockTick(){
    const date=new Date();
    const seconds=date.getSeconds()/60;
    const minutes=(seconds+date.getMinutes())/60;
    const hours=(minutes+date.getHours())/12;

    rotateClockHand(secondhand,seconds);
    rotateClockHand(minutehand,minutes);
    rotateClockHand(hourhand,hours);
}),1000);

function rotateClockHand(element,rotation){
    element.style.setProperty('--rotate',rotation*360);
}

setInterval((
    function dateset(){
const date=document.getElementById("date");
const d=new Date();
date.innerHTML=d.toLocaleDateString('In');
}),1000);

setInterval((
    function timeset(){
const date=document.getElementById("time");
const d=new Date();
date.innerHTML=d.toLocaleTimeString();
}),1000);

setInterval((
    function dateset(){
const date=document.getElementById("date");
const d=new Date();
date.innerHTML=d.toLocaleDateString('In');
}),1000);
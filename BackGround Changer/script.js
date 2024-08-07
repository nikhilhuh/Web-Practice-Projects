const buttons = document.querySelectorAll(".button")
const hexValueInput = document.getElementById("hexValue")
const colorMap = {
    grey: "#808080",
    white: "#FFFFFF",
    blue: "#0000FF",
    yellow: "#FFFF00",
    green: "#008000",
    red: "#FF0000",
    papayawhip: "#FFEFD5",
    navy: "#000080",
    lightblue: "#ADD8E6",
    cyan: "#00FFFF",
    darkgoldenrod: "#B8860B",
    black: "#000000",
    greenyellow: "#ADFF2F",
    hotpink: "#FF69B4",
    indigo: "#4B0082",
    burlywood: "#DEB887"
};
document.documentElement.style.setProperty('--background-color',"white")
hexValueInput.value = colorMap.white

buttons.forEach(function(button){
    button.style.backgroundColor = button.id
    button.addEventListener("click",function(e){
        document.documentElement.style.setProperty('--background-color', button.id);
        if(button.id==="black")
            document.documentElement.style.setProperty('--color',"white")
        else
            document.documentElement.style.setProperty('--color',"black")
       hexValueInput.style.backgroundColor = button.id
       hexValueInput.value = colorMap[button.id]
    })
})

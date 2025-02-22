document.addEventListener("DOMContentLoaded",function(){
const divcolor = document.getElementById("color-box")
const btncolor = document.getElementById("change-color-btn")
function  getRandomColor() {
    return "#"+Math.random().toString(16).slice(-6)


}

 
btncolor.addEventListener('click',function(){
    divcolor.style.backgroundColor = getRandomColor();
})
})

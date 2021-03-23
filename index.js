window.addEventListener("load",()=>{

const sounds = document.querySelectorAll('.sound');
const pads = document.querySelectorAll('.pads div');
const visual = document.querySelector('.visual');
const colors = [
    "rgb(28, 8, 212)",
    "rgb(160, 91, 1)",
    "rgb(20, 190, 57)",
    "rgb(228, 30, 23)",
    "rgb(3, 181, 194)"
]

pads.forEach((pad,index) =>{
    pad.addEventListener("click",function(){
        sounds[index].currentTime = 0;
        sounds[index].play();

        createbub(index);
    })
})

const createbub = (index) =>
{
    const bubble = document.createElement("div");
    visual.appendChild(bubble)
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener('animationend',function()
    {
        sounds[index].pause();
        visual.removeChild(this);
    })
}



})
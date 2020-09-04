const colorList = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const main = document.querySelector("main");
let newColor = document.querySelector(".newColor");
let button = document.querySelector("button");
const color = document.querySelector(".color");

newColor.addEventListener("click", () => {
    let hexColor = "#";
    for(let i=0; i<6; i++) {
        hexColor += colorList[randomColor()];
    }
    color.textContent = hexColor;
    button.classList.add("rotate");
    main.style.backgroundColor = hexColor;
})

const randomColor = () => {
    return Math.floor(Math.random()*colorList.length);
}

setInterval(() => {
    button.classList.remove("rotate");
}, 1000)
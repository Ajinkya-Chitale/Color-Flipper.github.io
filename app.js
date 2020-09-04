const simpleColor = ["Red", "Green", "#f12354", "rgb(0,0,255)"];

const main = document.querySelector("main");
let newColor = document.querySelector(".newColor");
let button = document.querySelector("button");
const color = document.querySelector(".color");

newColor.addEventListener("click", () => {
    const randomCol = randomColor();
    button.classList.add("rotate");
    main.style.backgroundColor = simpleColor[randomCol];
    color.textContent = simpleColor[randomCol];
})

const randomColor = () => {
    return Math.floor(Math.random()*simpleColor.length);
}

setInterval(() => {
    button.classList.remove("rotate");
},1000);
const codeEditor = () => {
    const htmlEditor = document.querySelector(".code_editor #html").value;
    const cssEditor = "<style>" + document.querySelector(".code_editor #css").value + "</style>";
    const jsEditor = document.querySelector(".code_editor #js").value;
    const resultEditor = document.querySelector(".code_editor #result");
    resultEditor.contentDocument.body.innerHTML = htmlEditor+cssEditor;
    resultEditor.contentWindow.eval(jsEditor);
}

let codeBtn1 = document.querySelector(".codeBtn1");
let codeBtn2 = document.querySelector(".codeBtn2");
let codeBtn3 = document.querySelector(".codeBtn3");
let codeBtn4 = document.querySelector(".codeBtn4");

let textarea1 = document.querySelector(".textarea1");
textarea1.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>


</body>
</html>`
textarea1.style.color = "rgb(85 174 232 / 90%)";
let textarea2 = document.querySelector(".textarea2");
let textarea3 = document.querySelector(".textarea3");
let textarea4 = document.querySelector(".textarea4");


codeBtn1.addEventListener("click", () => {
    textarea1.style.display = "block";
    textarea2.style.display = "none";
    textarea3.style.display = "none";
    textarea4.style.display = "none";
})
codeBtn2.addEventListener("click", () => {
    textarea2.style.display = "block";
    textarea1.style.display = "none";
    textarea3.style.display = "none";
    textarea4.style.display = "none";
})
codeBtn3.addEventListener("click", () => {
    textarea3.style.display = "block";
    textarea1.style.display = "none";
    textarea2.style.display = "none";
    textarea4.style.display = "none";
})
codeBtn4.addEventListener("click", () => {
    textarea4.style.display = "block";
    textarea1.style.display = "none";
    textarea2.style.display = "none";
    textarea3.style.display = "none";
    codeEditor();
})

// setting icon 

const setting = document.querySelector(".settingIcon");
setting.innerHTML = `<div class="settingText">
<ul>
<li id="dark">Dark Blue Theme</li>
<li id="light">White Theme</li>
</ul>
</div>`

const settingPop = document.getElementById("settingPop");
const settingText = document.querySelector(".settingText");

settingPop.addEventListener("click", () => {
    settingText.classList.toggle("settingPOPText");
})

document.getElementById("dark").addEventListener("click", () => {
    textarea1.style.color = "#51A1D6";
})

document.getElementById("light").addEventListener("click", () => {
    textarea1.style.color = "rgb(255,255,255)";
})

// navbar 
const navbar = document.getElementById("bars");
const information = document.getElementById("information");
const song = new Audio("https://www.fesliyanstudios.com/soundeffects-download.php?id=387");
navbar.addEventListener("click", () => {
    information.classList.toggle("navbar");
    song.play();
})

// ***************************************** keyup *****************************************
// let textList = document.querySelector(".textList");
// const keyUpFunction = (e) => {
//     if(e.key == "a"){
//         textList.style.display = "block";
//         console.log(e.key);
//     }
// }
// textarea1.addEventListener("keyup", keyUpFunction);

// let a_Element = document.querySelector(".a_Element");

// a_Element.addEventListener("click", (e) => {
//     textList.style.display = "none";
//     a_Element.innerHTML = `<h1>Hello Wolrd </h1>`;
//     console.log(textarea1.innerHTML);
// })

// ***************************************** menu file *****************************************
let file = document.querySelector(".file");
let menuText = document.querySelector(".menuText");

file.addEventListener("mouseenter", () => {
    menuText.style.display = "block";
})

textarea1.addEventListener("click", () => {
    menuText.style.display = "none";
})

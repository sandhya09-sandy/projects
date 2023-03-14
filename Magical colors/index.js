const body=document.querySelector("body");
const button=document.querySelector("button");
const color=["red","green","yellow","orange","purple","blue"];

body.style.backgroundColor="violet";

button.addEventListener('click',changecolor);


function changecolor()
{
    const colorindex=parseInt(Math.random()*color.length);
    body.style.backgroundColor=color[colorindex];
}
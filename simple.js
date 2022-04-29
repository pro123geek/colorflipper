const color=["green","red","blue","#f18324"]
const btn=document.getElementById("btn");
const colors=document.getElementById("colors");
btn.addEventListener('click',function()
{   
    const randomNumber=getRandom();
    colors.innerHTML=color[randomNumber];
    document.body.style.backgroundColor=color[randomNumber];
}
)
function getRandom()
{
    return Math.floor(Math.random()*color.length);
    
}

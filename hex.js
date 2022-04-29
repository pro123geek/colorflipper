const color=[0,1,2,3,4,5,6,7,8,9,'A','B','D','E','F'];

const btn=document.getElementById("btn");
const colors=document.getElementById("colors");

btn.addEventListener('click',function()
{
    var hex="#";
    for(var i=0;i<6;i++)
    {
        
        hex+=color[getRandom()];
    }
    document.body.style.backgroundColor=hex;
    colors.innerHTML=hex;
}
);
function getRandom()
{
    return Math.floor(Math.random()*color.length);
}
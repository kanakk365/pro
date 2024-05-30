let count=0;
document.querySelector(".dec").onclick=function(){
    count--;
    document.querySelector("h1").textContent=count;

}
document.querySelector(".inc").onclick=function(){
    count++;
    document.querySelector("h1").textContent=count;

}
document.querySelector(".res").onclick=function(){
    count=0;
    document.querySelector("h1").textContent=count;

}
let radius;
let area;
const PI=3.14159;
document.querySelector(".myButton").onclick=function(){
    radius= document.querySelector(".myText").value;
    radius=Number(radius);
    area= 2*PI*radius;
    console.log(area);
}



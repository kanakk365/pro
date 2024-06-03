let box=document.querySelector(".box ");
let x=0;
let y=0;
const moveAmt=50;
document.addEventListener("keydown", event=>{
    if(event.key.startsWith("Arrow")){
        event.preventDefault();
        switch(event.key){
            case "ArrowUp":
                y-=moveAmt;
                break;

            case "ArrowDown":
                y+=moveAmt;
                break;   

            case "ArrowLeft":
                x-=moveAmt;
                break;

            case "ArrowRight":
                x+=moveAmt;
                break;
        }
        box.style.top=`${y}px`;
        box.style.left=`${x}px`;
        console.log(event);
        
    }
})
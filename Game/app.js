

let rock=document.querySelector(".rock");
let paper=document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let player=document.querySelector(".player");
let comp=document.querySelector(".comp");
let playerScore=document.querySelector(".pscore");
let compScore= document.querySelector(".cscore");
let result=document.querySelector(".result");
let userChoice="";
let compChoice=""
let playersc=0;
let compsc=0;
function computerChoice(){
    let computer=["rock","paper","scissors"];
    let random=Math.floor(Math.random()*3);
    compChoice=computer[random];
    comp.textContent=compChoice;

}
rock.addEventListener("click", event=>{
    userChoice="rock";
    computerChoice();
    player.textContent="rock";
    checkResult();
});

paper.addEventListener("click", event=>{
    userChoice="paper";
    computerChoice();
    player.textContent="paper";
    checkResult();
});

scissors.addEventListener("click", event=>{
    userChoice="scissors";
    computerChoice();
    player.textContent="scissors";
    checkResult();
});

function checkResult(){
    if(userChoice===compChoice){
        result.textContent="IT'S A TIE";
        result.style.display="block";
    }else{
        switch(userChoice){
            case "rock":
                result.textContent=(compChoice==="scissors") ?"You Win" : "You Lose" ;
                result.style.display="block";
                break;
            case "paper":
                 result.textContent=(compChoice==="rock") ?"You Win": "You Lose";
                 result.style.display="block";
                break;
            case "scissors":
                result.textContent=(compChoice==="paper") ?"You Win": "You Lose";
                break;
            }
            }

            switch(result.textContent){
                case "You Win":
                playersc++;
                playerScore.textContent=playersc;
                break;

                case "You Lose":
                    compsc++;
                    compScore.textContent=compsc;
            }
        }
    
    







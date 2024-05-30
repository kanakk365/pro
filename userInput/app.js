let username;
document.querySelector(".mySubmit").onclick= function(){
        username= document.querySelector(".myText").value;
        document.querySelector(".h1").textContent=username;
}
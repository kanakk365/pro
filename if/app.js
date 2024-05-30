const myCheckBox= document.querySelector(".myCheckBox");
const visaBtn= document.querySelector(".visaBtn");
const mcBtn= document.querySelector(".mcBtn");
const ruBtn= document.querySelector(".ruBtn");
const submitBtn= document.querySelector(".mySubmit");
const subResult= document.querySelector(".subResult");
const paymentResult= document.querySelector(".paymentResult");

submitBtn.onclick=function(){
    if(myCheckBox.checked){
        subResult.textContent=`You are subscribed`;
    }
    else{
        subResult.textContent=`You are not subscribed`;
    }
    
    if(visaBtn.checked){
        paymentResult.textContent=`You are paying with Visa`;
    }
    else if(mcBtn.checked){
        paymentResult.textContent=`You are paying with Master Card`;
    }
    else if(ruBtn.checked){
        paymentResult.textContent=`You are paying with Rupay`;
    }
    else{
        paymentResult.textContent=`Paise ni hai tere pe`;
    }
}
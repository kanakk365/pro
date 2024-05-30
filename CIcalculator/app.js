
function calculate(){
    let ci=0;
    let principalAmt = document.querySelector("#principal");
    let rateAmt= document.querySelector("#rate");
    let yearsAmt= document.querySelector("#years");
    let totalAmt=document.querySelector(".total-amount");

    let principal=Number(principalAmt.value);
    let rate=Number(rateAmt.value)/100;
    let years=Number(yearsAmt.value);

    const result= principal*Math.pow((1+rate/1),1*years)
    
    totalAmt.textContent=result;
    console.log(result);
    console.log(principal);
    console.log(rate);
    console.log(years);

    


}

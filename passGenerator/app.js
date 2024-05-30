function generatePassword(){
    const input = document.querySelector(".input").value;
    let result= document.querySelector(".result");
    let includeLowercase=document.querySelector(".lowerCase");
    let includeUppercase=document.querySelector(".upperCase");
    let includeNumbers=document.querySelector(".numbers");
    let includeSymbols=document.querySelector(".symbols");

        let passwordLength=input;
        let incLow= includeLowercase.checked;
        let incUpp= includeUppercase.checked;
        let incNum= includeNumbers.checked;
        let incSym= includeSymbols.checked; 
    function generate(input ,includeLowercase,includeUppercase,includeNumbers,includeSymbols){
        
        let lowercaseChar="abcdefghijklmnopqrstwxyz";
        let uppercaseChar="ABCDEFGHIJKLMNOPQRSTWXYZ";
        let numbers="1234567890";
        let symbols="!@#$%^&*+-()_";
        let allowedChars = "";
        let password= " ";
        allowedChars+= incLow ? lowercaseChar : "";
        allowedChars+= incUpp ? uppercaseChar : "";
        allowedChars += incNum ? numbers : "";
        allowedChars += incSym ? symbols : "";
        if(passwordLength<=0){
            result.textContent= `Password length must be at least 1`;
        }
        if(allowedChars.length===0){
            result.textContent=`At least 1 set of character needs to be selected`;
        }
        for(let i=0; i<passwordLength; i++){
            const randomIndex = Math.floor(Math.random()*allowedChars.length);
            password+=allowedChars[randomIndex];
        }
        result.textContent=password;

    }
    
    const password= generate(input ,includeLowercase,includeUppercase,includeNumbers,includeSymbols);
}

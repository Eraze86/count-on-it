//koppla button och slection till js

const op = document.getElementById("option");
const button = document.getElementById("button");
const p = document.querySelector("p");
const res = document.getElementById("res");

//Skapa knappt som ska klicka igång uträkningen
button.addEventListener("click", function(){ 

    const a = parseInt(document.getElementById("num1").value);
    const b = parseInt(document.getElementById("num2").value);
    let resultat = document.createElement("div");
    res.append(resultat)
//de olika räkne sätten
    switch (op.value){
        
        case "add":
    
            resultat.innerText += (a+b)
         
        break;
        case "sub":
            
            resultat.innerText += (a - b)
        break;
        case "multi":
            
            resultat.innerText += (a * b)
        break;
        case "divi":
            
            resultat.innerText += (a / b)
        break;
        
    }
});

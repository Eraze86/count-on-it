// koppla input 1 och 2 till js


//coppla button och slection till js

const op = document.getElementById("option");
const button = document.getElementById("button");
const p = document.querySelector("p");


//Skapa knappt som ska klicka igång uträkningen
button.addEventListener("click", function(){ 

    const a = parseInt(document.getElementById("num1").value);
    const b = parseInt(document.getElementById("num2").value);
//de olika räkne sätten
    switch (op.value){
 
        case "add":
            p.innerText = (a+b)
        //   console.log(a + b)
        break;
        case "sub":
            
            p.innerText = (a - b)
        break;
        case "multi":
            
            p.innerText = (a * b)
        break;
        case "divi":
            
            p.innerText = (a / b)
        break;
    }
});

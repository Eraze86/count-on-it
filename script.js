// koppla input 1 och 2 till js

const a = document.getElementById("num1").value;
const b = document.getElementById("num2").value;
//coppla button och slection till js

const op = document.getElementById("option")
const button = document.getElementById("button")


//Skapa knappt som ska klicka igång uträkningen
button.addEventListener("click", function(){ 


//de olika räkne sätten
    switch (op){
        case "add":
          console.log(a + b)
        break;
        case "sub":
            console.log(a - b)
        break;
        case "multi":
            console.log(a * b)
        break;
        case "divi":
            console.log(a / b)
        break;
    }
});

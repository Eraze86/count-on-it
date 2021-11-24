const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const option = document.getElementById("option")
const button = document.getElementById("button")

let num1 = 0;
let num2 = 0;
button.addEventListener("click", function(){   

    switch (option){
        case "+":
          console.log(num1 + num2)
        break;
        case "-":
            console.log(num1 - num2)
        break;
        case "*":
            console.log(num1 * num2)
        break;
        case "/":
            console.log(num1 / num2)
        break;
    }
});
// let value=document.getElementById("seven");

// function printNum(){
//     alert("you click seven")
// }
// printNum();

// let plus=document.getElementById("plus");
// plus.addEventListener("click", () => {
//     alert("you clicked +")
// })

let buttons = document.getElementsByTagName("button"); //to select element by tag name (button) ..(saare  button tag ko select krne ke liye)
let buttonArray = Array.from(buttons); // saree button html collection mai hai ...unko array mai convert krne ke liye array.from...(to convert html collection to  array)

//add event listener to all the buttons(loop)
buttonArray.forEach((button) => {
  button.addEventListener("click", printNum);
});

function printNum(event) {
  let button2 = event.target.innerText;
  // console.log(button2.innerText)

  let screen = document.getElementById("screen");

  if (button2 === "C") {
    screen.value = "";
    return;
  }
  if (button2 === "+-") {
    if (screen.value[0] === "-") {
      screen.value = screen.value.slice(1);
    } else {
      screen.value = "-" + screen.value;
    }
    return;
  }
  if("+-x/".includes(button2)){
    if(screen.value.includes("+") ||
    screen.value.includes("-") ||
    screen.value.includes("/") ||
    screen.value.includes("x")
  ){
      alert("sign is already present");
      return;
    }
  }
  if (button2 === "=") {
    if (screen.value.includes("+")) {
      ans = printSum(screen.value);
      screen.value = ans;
      return;
    } else if (screen.value.includes("x")) {
      ans = printMultiply(screen.value);
      screen.value = ans;
      return;
    } else if (screen.value.includes("-")) {
      ans = printMinus(screen.value);
      screen.value = ans;
      return;
    } else if (screen.value.includes("/")) {
      ans = printDivide(screen.value);
      if (ans === undefined) {
        screen.value = "";
        return;
      }
      screen.value = ans;
      return;
    }
  }
  

  screen.value = screen.value + button2; //screen mai jo bhi show hoga vo
}

function printSum(value) {
  let plus = value.indexOf("+");
  let num1 = value.slice(0, plus);
  let num2 = value.slice(plus + 1);
  let sum = Number(num1) + Number(num2);
  return sum;
}
function printMultiply(value) {
  let multiply = value.indexOf("x");
  let num1 = value.slice(0, multiply);
  let num2 = value.slice(multiply + 1);
  let sum = Number(num1) * Number(num2);
  return sum;
}
function printMinus(value) {
  let minus = value.indexOf("-");
  let num1 = value.slice(0, minus);
  let num2 = value.slice(minus + 1);
  let sum = Number(num1) - Number(num2);
  return sum;
}
function printDivide(value) {
  let divide = value.indexOf("/");
  let num1 = value.slice(0, divide);
  let num2 = value.slice(divide + 1);
  if (Number(num2) === 0) {
    alert("can't divide");
  } else {
    let sum = Number(num1) / Number(num2);
    return sum;
  }
}

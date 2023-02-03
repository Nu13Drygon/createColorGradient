//imports
import { setGradient } from "./example.js"

//element variables
let rgb1
let rgb2
let submitBtn
let rgb1Arr = [] 
let rgb2Arr = []
let colorGradient1 = [158, 52, 235]
let colorGradient2 = [52, 235, 174]


//main entry
checkLoaded(afterLoaded)

//Sketch entry point
const s = ( sketch ) => {
  
  
  sketch.setup = () => {
    sketch.createCanvas(400, 400);
  };
  
  sketch.draw = () => {
    setGradient(
      0, 
      0, 
      sketch.width, 
      sketch.height, 
      sketch.color(...colorGradient1), 
      sketch.color(...colorGradient2),
      sketch
      )
    };
  };
  
let myp5 = new p5(s);



//Checks if DOM loaded and grabs element from DOM
function checkLoaded(eventHandler) {
  if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', eventHandler);
  } else {
    eventHandler();
  }
}

function afterLoaded() {
  rgb1 = document.getElementById("rgb1")
  rgb2 = document.getElementById("rgb2")
  submitBtn = document.getElementById("submitBtn")
  submitBtn.addEventListener('click', subBtnHld)
}

function subBtnHld() {
  let colorVal1 = rgb1.value.toLowerCase()
  let colorVal2 = rgb2.value.toLowerCase()

  const regex = new RegExp(/[a-z]/)

  
  if(colorVal1 === "" || colorVal2 === "") {
    return invalidDisplay() 
  }

  if(regex.test(colorVal1) || regex.test(colorVal2)) {
    return invalidDisplay()
  }

  rgb1Arr = colorVal1.split("-")
  rgb2Arr = colorVal2.split("-")
  
  if(rgb1Arr.length !== 3 || rgb2Arr.length !== 3) {
    return invalidDisplay()
  }
  
  //Check the length of each number in array and if value > 255
  for(let i = 0; i < rgb1Arr.length; i++) {
    if(rgb1Arr[i].length > 3 || rgb2Arr[i].length > 3) {
      return invalidDisplay()
    } 
    if(parseInt(rgb1Arr[i]) > 255) {
      return invalidDisplay()
    }
  }

  for(let i = 0; i < rgb1Arr.length; i++) {
    rgb1Arr[i] = parseInt(rgb1Arr[i])
    rgb2Arr[i] = parseInt(rgb2Arr[i])
  }
  colorGradient1 = rgb1Arr
  colorGradient2 = rgb2Arr
  document.getElementById("inputValid").innerHTML = "Input is: valid"
}



function invalidDisplay() {
  document.getElementById("inputValid").innerHTML = "Input is: not valid"
}




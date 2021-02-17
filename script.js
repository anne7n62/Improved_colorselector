"use strict";

window.addEventListener("DOMContentLoaded", getColor);

function getColor() {
  console.log("get color");
  let input = document.querySelector(".colorpicker"); //getting the input
    input.addEventListener("input",getColor); // when user puts in input the calculating starts
    showingColorDelegator(input);
}

function showingColorDelegator(input){
console.log ("we are in the delegator");
const hex = input.value; 
console.log(hex);

const rgb = hexToRgb(hex);
showRgb(rgb);

showCssColor(hex);

const hsl = rgbToHsl(rgb);
showHsl(hsl);
}

//____________

function hexToRgb(hex){
  const r = parseInt(hex.substring(1,3),16);
  const g = parseInt(hex.substring(3,5),16);
  const b = parseInt(hex.substring(5,7),16);
  return {r,g,b};
}

function showRgb(rgb){
  //placing the result in the DOM
  document.querySelector(".RGBoutput").textContent = `(${rgb.r}, ${rgb.g}, ${rgb.b})`;
}

///__________

function showCssColor(hex){
  console.log();
  document.querySelector("#color").style.backgroundColor = `${hex}`; // changes color of div
}

function rgbToCss(){
  console.log();
}

///___________

function showHex(hex){
  document.querySelector(".HEXoutput").textContent = hex; //places the colorvalue in the DOM
  console.log();
  //modtager hex parameter
}

function rgbToHex(rgb){
    const r = rgb.r.toString(16).padStart(2,"0");
    const g = rgb.g.toString(16).padStart(2,"0");
    const b = rgb.b.toString(16).padStart(2,"0");
    const hex = `#${r}${g}${b}`;
    return hex;
  //the function receives rgb and returns with hex
}

///____________

function showHsl(hsl){
  document.querySelector(".HSLoutput").textContent = `${hsl.h.toFixed(2)}%, ${hsl.s.toFixed(2)}%, ${hsl.l.toFixed(2)}%`;
}

function rgbToHsl(rgb){
  let r = rgb.r;
  let g = rgb.g;
  let b = rgb.b;

            r /= 255;
            g /= 255;
            b /= 255;
          
            let h, s, l;
          
            const min = Math.min(r,g,b);
            const max = Math.max(r,g,b);
           
            if( max === min ) {
              h = 0;
            } else
            if (max === r) {
              h = 60 * (0 + (g - b) / (max - min) );
            } else
            if (max === g) {
              h = 60 * (2 + (b - r) / (max - min) );
            } else
            if (max === b) {
              h = 60 * (4 + (r - g) / (max - min) );
            }
           
            if (h < 0) {h = h + 360; }
           
            l = (min + max) / 2;
           
            if (max === 0 || min === 1 ) {
              s = 0;
            } else {
              s = (max - l) / ( Math.min(l,1-l));
            }
            // multiply s and l by 100 to get the value in percent, rather than [0,1]
            s *= 100;
            l *= 100;

            return {h,s,l};
}




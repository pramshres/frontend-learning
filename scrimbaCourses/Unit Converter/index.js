const conversionRate = {
    meterToFeet: 3.281,
    literToGallon: 0.264,
    kiloToPound: 2.204
}

//DOM elements
const inputEl = document.getElementById("input-el") 
const convertBtn = document.getElementById("convert-btn")
const lengthPara = document.getElementById("length-p")
const volumePara = document.getElementById("volume-p")
const massPara = document.getElementById("mass-p")

function convert() {
    let unit = inputEl.value
    lengthPara.textContent = 
    `${unit} meters = ${(unit * conversionRate.meterToFeet).toFixed(3)} feet
    | ${unit} feet = ${(unit/conversionRate.meterToFeet).toFixed(3)} meters`
    
    volumePara.textContent = 
    `${unit} liters = ${(unit * conversionRate.literToGallon).toFixed(3)} gallons
    | ${unit} gallons = ${(unit/conversionRate.literToGallon).toFixed(3)} liters`
    
    massPara.textContent = `${unit} kilos = ${(unit * conversionRate.kiloToPound).toFixed(3)} pounds
    | ${unit} pounds = ${(unit/conversionRate.kiloToPound).toFixed(3)} kilos`
}

convertBtn.addEventListener("click", convert)

inputEl.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    convert()
  }
})
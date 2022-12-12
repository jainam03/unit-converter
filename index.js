let inputEl = document.getElementById("input")
let convertBtn = document.getElementById("convert-btn")
let lengthValues = document.getElementById("length-values")
let volumeValues = document.getElementById("volume-values")
let massValues = document.getElementById("mass-values")

convertBtn.addEventListener("click", function () {
    if (inputEl.value === "") {
        alert("Please enter a value first!")
    }
    let feetValue = inputEl.value * 3.28

    lengthValues.innerHTML = `${inputEl.value} meters = ${feetValue} feet | ${feetValue} feet = ${inputEl.value} meters`


    let gallonValue = inputEl.value * 0.26

    volumeValues.innerHTML = `${inputEl.value} litres = ${gallonValue} gallons | ${gallonValue} gallons = ${inputEl.value} litres`

    let poundValues = inputEl.value * 2.21

    massValues.innerHTML = `${inputEl.value} Kilos = ${poundValues} pounds | ${poundValues} pounds = ${inputEl.value} kilos`

})

toogleMode.addEventListener("click", function () {
    var element = document.body
    element.classList.toggle("dark-mode")
})
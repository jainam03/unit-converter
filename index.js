let inputEl = document.getElementById("input")
let convertBtn = document.getElementById("convert-btn")
let lengthValues = document.getElementById("length-values")
let volumeValues = document.getElementById("volume-values")
let massValues = document.getElementById("mass-values")
let clearBtn = document.getElementById("clear-btn");

convertBtn.addEventListener("click", function () {
    allNumeric();
    if (inputEl.value === "") {
        alert("Please enter a value first!")
        return false
    }

    function allNumeric() {
        var numbers = /^[0-9]+$/;
        if (inputEl.value.match(numbers)) {
            console.log('valid input')
            return true;
        } else {
            alert("Input should be numbers only")
            window.location.reload()
        }
    }
    let feetValue = inputEl.value * 3.28

    lengthValues.innerHTML = `${inputEl.value} meters = ${feetValue} feet | ${feetValue} feet = ${inputEl.value} meters`


    let gallonValue = inputEl.value * 0.26

    volumeValues.innerHTML = `${inputEl.value} litres = ${gallonValue} gallons | ${gallonValue} gallons = ${inputEl.value} litres`

    let poundValues = inputEl.value * 2.21

    massValues.innerHTML = `${inputEl.value} Kilos = ${poundValues} pounds | ${poundValues} pounds = ${inputEl.value} kilos`

})

clearBtn.addEventListener("click", function () {
    inputEl.value = ""

    lengthValues.innerHTML = `0 meters = 0.000 feet | 0 feet = 0.000 meters`

    volumeValues.innerHTML = `0 litres = 0.000 gallons | 0 gallons = 0.000 litres`

    massValues.innerHTML = `0 Kilos = 0.000 pounds | 0 pounds = 0.000 kilos`

    setTimeout(() => {
        alert("All cleared!")
    }, 200)

    setTimeout(() => {
        window.location.reload()
    }, 210)
})

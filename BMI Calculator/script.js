const calculate = document.getElementById("calculate")
const pointer = document.querySelector(".pointer")

// Event listener to simulate submit button click on Enter key press
document.body.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent the default Enter key action
        calculate.click(); // Simulate a click on the submit button
    }
});

calculate.addEventListener("click", (e) => {
    e.preventDefault()
    const height = parseInt(document.getElementById("height").value)
    const weight = parseInt(document.getElementById("weight").value)


    const output = document.querySelector(".output")
    const result = document.querySelector(".result")

    if ( height == 0 || isNaN(height)) {
        alert("Please Provide a valid Height")
    }
    else if ( weight == 0 || isNaN(weight)) {
        alert("Please Provide a valid Weight")
    }
    else{
        let pointerAngle = 0
        let category = "" 
        const bmi = (weight/(height*height/10000)).toFixed(1);
        if(bmi<18.5){
            category = "Underweight"
            pointerAngle = -75
        }
        else
        if(bmi<24.9){
            category = "Normal"
            pointerAngle = -37
        }
        else
        if(bmi<29.9){
            category = "Overweight"
            pointerAngle = 0
        }
        else
        if(bmi<34.9){
            category = "Obese"
            pointerAngle = 37
        }
        else
        {
            category = "Extremely Obese"
            pointerAngle = 75
        }
        output.style.display = "flex"
        result.textContent = `Your Body Mass Index (BMI) is ${bmi} and your category is ${category}.`
        pointer.style.transform =`rotate(${pointerAngle}deg)`;
    }
})
const calculate = document.getElementById("calculate")

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
        let category = "" 
        const bmi = (weight/(height*height/10000)).toFixed(1);
        if(bmi<18.5){
            category = "Underweight"
        }
        else
        if(bmi<24.9){
            category = "Normal"
        }
        else
        if(bmi<29.9){
            category = "Overweight"
        }
        else
        if(bmi<34.9){
            category = "Obese"
        }
        else
        {
            category = "Extremely Obese"
        }
        output.style.display = "flex"
        result.textContent = `Your Body Mass Index (BMI) is ${bmi} and your category is ${category}.`
    }
})
function weight() {   
    const h=document.querySelector("#height").value
    const w=document.querySelector("#weight").value
    const output1 = document.querySelector(".output")
    const bmi = (w * 10000 / (h * h)).toFixed(2):

if (bmi < 18.6) {
   output1.innerHTML = `YOUR BMI IS ${bmi}. YOU ARE UNDERWEIGHT`;:
    output1.style.fontSize = "30px";
    output1.style.fontWeight = "700";
    output1.style.color="red";

} else if (bmi >= 18.6 && bmi <= 24.9) {
    output1.innerHTML = `YOUR BMI IS ${bmi}. YOU ARE NORMAL WEIGHT`;
    output1.style.fontSize = "30px";
    output1.style.fontWeight = "700";
    output1.style.color="green";
   

} else if (bmi > 24.9) {
   output1.innerHTML = `YOUR BMI IS ${bmi}. YOU ARE OVERWEIGHT`;
    output1.style.fontSize = "30px";
    output1.style.fontWeight = "700";
    output1.style.color="red";

}
}

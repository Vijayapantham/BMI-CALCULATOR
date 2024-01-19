
document.addEventListener('DOMContentLoaded', function() {
    let button = document.getElementById('mybutton');
    button.onclick = function(event) {
            event.preventDefault();
    let height=parseFloat(document.getElementById('height').value)
    let weight=parseFloat(document.getElementById('weight').value)
    let result=document.getElementById('results')
    if((height === '') || (height < 0) || (isNaN(height))){
        result.innerHTML = "Please provide a valid height";
        
} else if (weight === '' || weight < 0 || isNaN(weight)){
    result.innerHTML = "Please provide a valid weight";
} 
else {
//calculate BMI
const bmi = (weight / ((height*height)/10000)).toFixed(2);
//display the results
result.innerHTML = bmi
}
}
});
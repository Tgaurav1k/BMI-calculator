const form = document.querySelector('form')
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault()

   const height = parseInt(document.querySelector('#height').value)
   const weight = parseInt(document.querySelector('#weight').value)
   const results = (document.querySelector('#results'))

   if( height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `PLease give a vaild height ${height}`;
}
    else if( weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `PLease give a vaild weight ${weight}`;
} 

else  {
   const bmi = (weight / ((height*height)/10000)).toFixed(2)
   //show the result 
 // Determine BMI category
const bmiCategory = bmi <18.6
? 'under weight':
bmi >= 18.6 && bmi <= 24.9
? 'normal weight':
 'overweight';

// Show the BMI result and category
results.innerHTML = `<span>Your BMI is ${bmi} (${bmiCategory})</span>`;

}





});

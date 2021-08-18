//A Snarky Robot

//Write code that asks the user what their favorite number is and then responds according to the following guidelines:

//1. If the number is 42, the response should be "Yay! That's my favorite too!"
//2. If the number is less than 42 the response should be: "Eh, that's OK but X would be even better"  for this response `X` should be the number that they guessed + 1
//3. If the number is higher than 42 the response should be: "LAME. That number is too large!"

function robot(){
let number = prompt('what is your favorite number', '')


if (number <= 41){
  let plusOne = number
  plusOne = ++number
   response = 'Eh, that\'s OK but '+ plusOne + ' would be even better'
}
else if (number >= 43){
   response = 'LAME. That number is too large!'
}
else if (number = 42){
   response = 'Yay! That\'s my favorite too!';
} 


console.log(response)
}
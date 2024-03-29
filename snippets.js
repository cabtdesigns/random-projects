// ***************** convert string to proper case.******************

//original quote
let quote = 'I dO nOT lIke gREen eGgS anD HAM';

// Add your code here

//convert to all lower case
let fixedQuote = quote.toLowerCase();

//make first letter capital and slice it into the quote + add a period at end
let finalQuote =  fixedQuote.charAt(0).toUpperCase() + fixedQuote.slice(1) + '.';


// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = fixedQuote;
let para2 = document.createElement('p');
para2.textContent = finalQuote;

section.appendChild(para1);
section.appendChild(para2);


// as a function
let quote = 'j wilL bE the BEST EvEr';

function capitalize(string) {
    let lowerCase = string.toLowerCase();
    let finalQuote = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1) + '.';
   console.log(finalQuote);
}

console.log(capitalize(quote));
    
// *************************** end ******************************



// ********************* Take last letter from a string **************************



takeLastLetter = 'make sure to feed the dog';

function lastLetter(string) {
   let finalLetter =  string.charAt(string.length-1);
    console.log(finalLetter);
}

console.log(lastLetter(takeLastLetter));

// *************************** end ******************************



// ********************* Trim a string **************************

//original quotes 
let quote = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.';
let substring = 'green eggs and ham';

// Add your code here

//find length of quote
quoteLength = quote.length;

//find the start of the substring
index = quote.indexOf(substring);

//showed me the end of the substring
sublength = substring.length + index;

//slice and output new quote
revisedQuote = quote.slice(0, 32) ;



// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = `The quote is ${ quoteLength } characters long.`;
let para2 = document.createElement('p');
para2.textContent = revisedQuote;

section.appendChild(para1);
section.appendChild(para2);

// *************************** end ******************************

//****************************convert to template literl and find square root */
//original code

let theorem = 'Pythagorean theorem';

let a = 5;
let b = 8;

let myString = 'Using *, we can work out that that if the two shortest sides of a right-angled triangle have lengths of * and *, the length of the hypotenuse is *.';

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = myString;

section.appendChild(para1);
 
//instructions

//In the final string task, we have given you the name of a theorem, two numeric values, 
//and an incomplete string (the bits that need adding are marked with asterisks (*)). We want you to change the value of the string as follows:

//Change it from a regular string literal into a template literal.
//Replace the four asterisks with four template literal placeholders. These should be:
//The name of the theorem.
//The two number values we have.
//The length of the hypotenuse of a right-angled triangle, given that the two other side lengths 
//are the same as the two values we have. You'll need to look up how to calculate this 
//from what you have. Do the calculation inside the placeholder.


// edited code

theorem = `Pythagorean theorem`;

a = `5`;
b = `8`;

myString = `Using ${ theorem } , we can work out that that if the two shortest sides of a right-angled triangle have lengths of
 ${ a } and ${ b }, the length of the hypotenuse is ${ Math.sqrt((a * a) + (b * b)) }.`;

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = myString;

section.appendChild(para1);

// *************************** end ******************************

//****************************convert arrow function ***********************/


// original code
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );

  //same code but with arrow functions
  let ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );

  //another example

  let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3
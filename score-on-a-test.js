// file will show a prompt where you enter how many points you got wrong on a test and show your precentage


const points = 50

let number = prompt('how many points did you lose on your test', '')

let score = (((points - number) * .02) * 100)  

if (score >= 90){
console.log(score + '%' + ' A');
} 
else if (score >=80){
  console.log(score + '%' + ' B');
}
else if (score >=70){
  console.log(score + '%' + ' C');
}
else if (score >=60){
  console.log(score + '%' + ' D');
}
else if (score <=50){
  console.log(score + '%' + ' F');
}

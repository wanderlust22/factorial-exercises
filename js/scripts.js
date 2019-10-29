$(document).ready(function() {

  var total = 1;

  function factorial2(number){
    for (let i = 1; i <= number; i++){
      total *= i;
    }
  }
  factorial2(5);
  console.log(total);
});



//
// $(document).ready(function() {
//
//   let numberArray = [];
//
//   function factorial(number) {
//     for (var i = 1; i <= number; i++){
//       numberArray.push(i);
//     }
//     multiply(numberArray);
//   }
//
//   factorial(5);
//
//   console.log(numberArray);
//
//   function multiply(array){
//     var total = 1;
//     for (let i = 0; i < array.length; i++){
//       total *= array[i];
//     }
//     console.log(total);
//   }
//
// });

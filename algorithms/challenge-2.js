function fizzBuzz(input){
if (input % 3 === 0 && input % 5 === 0) {
    console.log("Fizz Buzz")
    return "Fizz Buzz";
  } else if (input % 3 === 0) {
    console.log("Fizz")
    return "Fizz";
  } else if (input % 5 === 0) {
    console.log("Buzz")
    return "Buzz";
  } 
  console.log(input)
  return input; 
  
}


module.exports = fizzBuzz

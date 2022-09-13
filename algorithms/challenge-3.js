function sumMix(arr) {let sum = 0;
    for (let item of arr) {
      sum += parseInt(item);
    }
    console.log(sum)
    return sum;
   
 }

  module.exports = sumMix

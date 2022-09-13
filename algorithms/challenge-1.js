function countTruthy(arr) {let count = 0;
    for (let item of arr) {
        if (item) {
          count++;
        }
    }
    console.log(count)
    return count;
}
module.exports = countTruthy

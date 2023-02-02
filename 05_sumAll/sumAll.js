function sumAll(a, b) {

    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
        return 'ERROR';
    }
 
    let smallest = (a < b) ? a : b;
    let biggest = (a > b) ? a : b;
    let sum = smallest;
    for (let i = smallest; i <= biggest; i++) {
        sum = sum + i;
    }
    return sum - 1;

};

console.log(sumAll(1, 4));
// Do not edit below this line
module.exports = sumAll;


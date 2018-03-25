
// rSigma

// Write a recursive function that, given a number, returns the sum of integers from one up to that number. 
// For example, rSigma(5) = 1+2+3+4+5 = 15; 
// rSigma(2.5) = 1+2 = 3; 
// rSigma(-1) = 0. 

function rSigma(num) {
    if (num < 1) return 0;
    return rSigma(num-1) + num;
}

console.log(rSigma(5));
console.log(rSigma(23));
console.log(rSigma(-5));


// rBinarySearch

// Write a recursive function that, given a sorted array and a value, determines whether the value is found within the array. 
// For example, rBinarySearch([1,3,5,6], 4) = false; 
// rBinarySearch([4,5,6,8,12], 5) = true.

function rBinarySearch(array, value, start = 0, end = array.length-1) {
    if (!array) return false;

    let middle = Math.floor((start + end) / 2);

    if((start === end || start === end-1) && array[middle] !== value) return false;
    if(value < array[start] || value > array[end]) return false;

    if (array[middle] === value) {
        return true;
    } else if (array[middle] > value) {
        return rBinarySearch(array, value, start, middle);
    } else if (array[middle] < value) {
        return rBinarySearch(array, value, middle, end);
    } else return false;
}

console.log(rBinarySearch([7], 7)); // true
console.log(rBinarySearch([1,3,5,6], 4)); // false
console.log(rBinarySearch([1,3,5,6,7], 4)); //false
console.log(rBinarySearch([4,5,6,8,12], 5)); // true
console.log(rBinarySearch([4,5,6,8,12,16,18,20,23,25,27,30], 8)); // true
console.log(rBinarySearch([4,5,6,8,12,16,18,20,23,25,27,30], 3)); // false
console.log(rBinarySearch([4,5,6,8,12,16,18,20,23,25,27,30], 31)); // false


// Recursive Fibonacci

// Write rFib(num). Recursively compute and return the numth Fibonacci value. 
// As earlier, treat the first two (num = 0, num = 1) Fibonacci values as 0 and 1. 
// Thus, rFib(2) = 1 (0+1); 
// rFib(3) = 2 (1+1); 
// rFib(4) = 3 (1+2); 
// rFib(5) = 5 (2+3). 
// Also, rFib(3.65) = rFib(3) = 2. 
// Finally, rFib(-2) = rFib(0) = 0.

function rFib(n) {
    let num = Math.floor(n);
    if (num <= 0) return 0;
    if (num === 1) return 1;

    return rFib(num - 1) + rFib(num - 2);
}

console.log(rFib(-8));
console.log(rFib(1));
console.log(rFib(6.22));
console.log(rFib(12));
console.log(rFib(20));


// (skip) Binary String Expansion

// You will be given a string containing characters ‘0’, ‘1’, and ‘?’. 
// For every ‘?’, either ‘0’ or ‘1’ characters can be substituted. 
// Write a recursive function that returns an array of all valid strings that have ‘?’ characters expanded into ‘0’ or ‘1’. 
// Ex.: binStrExpand("1?0?") should return ["1000","1001","1100","1101"]. 
// For this challenge, you can use string functions such as slice(), etc., but be frugal with their use, as they are expensive. 

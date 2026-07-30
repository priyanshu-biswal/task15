let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Array:", arr);

//Maximum value
function findMax(arr) {
    let max = arr[0];
    for( let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log("Maximum value:", findMax(arr));

//sum of all elements
let sum = function(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
console.log("Sum of all elements:", sum(arr));

//odd numbers
let odd = (arr) => {
    let c =0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            c++;
        }
    }
    return c;
}
console.log("Count of odd numbers:", odd(arr));
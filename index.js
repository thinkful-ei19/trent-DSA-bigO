'use strict';

// Even or Odd
// function isEven(value){
//   if (value % 2 === 0){
//     return true;
//   }
//   else
//     return false;
// }

// O(1) no matter how big the input in it doesn't change the 
// output. You only are performing one operation: to take the modulo
// of a number.

// Are you here?
// function areYouHere(arr1, arr2) {
//     for (let i=0; i<arr1.length; i++) {
//         const el1 = arr1[i];
//         for (let j=0; j<arr2.length; j++) {
//             const el2 = arr2[j];
//             if (el1 === el2) return true;
//         }
//     }
//     return false;
// }

// O(n^2) the nested loop causes the runtime to scale dramatically
//  an increased input since you are looping within each iteration
//  of the loop.

// Doubler
// function doubleArrayValues(array) {
//     for (let i=0; i<array.length; i++) {
//         array[i] *= 2;
//     }
//     return array;
// }

// O(n) scales linearly because it has a single non nested loop.

// Naive Search
// function naiveSearch(array, item) {
//     for (let i=0; i<array.length; i++) {
//         if (array[i] === item) {
//             return i;
//         }
//     }
// }

// O(n) because it has scales linearly due to the single non nested loop.

// Creating pairs:
// function createPairs(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for(let j = i+1; j < arr.length; j++) {
//             console.log(arr[i] + ", " +  arr[j] );
//         }
//     }
// }

// O(n^2) because it has a nested loop, so every iteration causes another loop.

// Fibonnaci
// function generateFib(num) {
//     let result = [];
//     for (let i = 1; i <= num; i++) {
  
//       // we're adding the first item
//       // to the result list, append the
//       // number 0 to results
//       if (i === 1) {
//         result.push(0);
//       }
//       // ...and if it's the second item
//       // append 1
//       else if (i == 2) {
//         result.push(1);
//       }
  
//       // otherwise, sum the two previous result items, and append that value to results.
//       else {
//         result.push(result[i - 2] + result[i - 3]);
//       }
//     }
//     // once the for loop finishes
//     // we return `result`.
//     return result;
//   }

// O(n) scales linearly because its worst case scenario is a single non nested loop.


// An Efficient Search

// function efficientSearch(array, item) {
//     let minIndex = 0;
//     let maxIndex = array.length - 1;
//     let currentIndex;
//     let currentElement;

//     while (minIndex <= maxIndex) {
//         currentIndex = Math.floor((minIndex + maxIndex) / 2);
//         currentElement = array[currentIndex];

//         if (currentElement < item) {
//             minIndex = currentIndex + 1;
//         }
//         else if (currentElement > item) {
//             maxIndex = currentIndex - 1;
//         }
//         else {
//             return currentIndex;
//         }
//     }
//     return -1;
// }

// O(log(n)) this algorithm uses binary search so it scales logarithmically.


// Random element
// function findRandomElement(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
// }

// O(1) No matter how big the input it only uses one operation.


// Is it prime?
// function isPrime(n) {
//     // if n is less than 2 or a decimal, it's not prime
//     if (n < 2 || n % 1 != 0) {
//         return false;
//     }
//     // otherwise, check if `n` is divisible by any integer
//     // between 2 and n.
//     for (let i = 2; i < n; ++i) {
//         if (n % i == 0) return false;
//     }
//     return true;
// }

// Still O(n) because in the worst case scenario it has a single
// non nested loop. 

// Recursive Solutions from yesterday


// Iterative Solutions from yesterday

// function countSheepLoop(num){
//     for(let i=num; i>0; i--){
//         console.log(`counting sheeps ${i}`);
//     }
// }
// countSheepLoop(10);

// O(n) single non nested loop, scales linearly


// function double_all(arr) {
//     var ret = Array(arr.length);
//     for (var i = 0; i < arr.length; ++i) {
//         ret[i] = arr[i] * 2;
//     }
//     return ret;
// }
// let arr = [10,4,5,2,1];
// console.log(double_all(arr));

// O(n) single non nested loop, scales linearly


// function reverse_tail(str) {
//     var accumulator = "";
//     while (str !== "") {
//     	accumulator = str[0] + accumulator;
//     	str = str.slice(1);
//     }
//     return accumulator;
// }

// O(n) single non nested loop, scales linearly. the longer the str
// the more operations


// function triangle(n) {
//     var tot = 0;
//     for (var i = 1; i <= n; ++i) {
// 	    tot += n;
//     }
//     return tot;
// }

// O(n) single non nested loop, scales linearly


// function split(str, sep) {
//     var ret = [];
//     while (true) {
//         var idx = str.indexOf(sep);
//         if (idx == -1) break;
// 	ret.push(str.slice(0, idx))
// 	str = str.slice(idx + sep.length);
//     }
//     ret.push(str);
//     return ret;
// }

// O(n) single non nested loop, scales linearly, the longer the str
// the more operations 


// function convertToBinaryIter(num){
//     var binary = '';
//     while(num>0){
//         let rem = Math.floor(num%2);
//         binary = rem + binary;
//         num = Math.floor(num/2);
//     }
//     return binary;


// }
// console.log(convertToBinaryIter(124)); //1111100

// O(n) single non nested loop, scales linearly, the bigger the numeric
// input the more operations necessary


// function factorialIterative(number){
//     let fact = 1;
//     for (let i = 1; i <= number; i++){
//         fact *= i;
//     }
//     return fact;
//  }
//  console.log(factorialIterative(5));

// O(n) single non nested loop, scales linearly



// function fibonacciIterative2(number){
//     let [num1, num2] = [1,0];
//     while(number-- > 0){
//         [num1, num2] = [num2+num1, num1]
//     }
//     return num2;

// }
// console.log(fibonacciIterative2(3));

// O(n) single non nested loop, scales linearly



// Acc Pattern

// Iterative Native Array Methods

// For each of the following exercises, 
// 1. write them using a for loop first
// 2. comment out the accumulator pattern solution and write it using a native array method
// 3. call the function and console.log the result

// 1. Write a function that takes in an array of strings and returns a new array where each string is replaced by it's length
// ["hello", "world"] => [5, 5] 

function takeArray(arr){
    let str = [];
 for (let i = 0; i < arr.length; i++ ){
    str.push(arr[i].length);
  } // return arr.map(str => str.length) // the map changes every string into the string length
  
  return str;
}


const inputArray = ["apple" , "car", "house" ,"people"]

console.log(takeArray(inputArray));

function findMax(arr){
  return Math.max(...arr); // this math.max does NOT take in an array without the spread(...). In all other situations, it takes numbers.
}
//console.log(findMax([1, 2, 3 ]));// 3

// 2. Write a function that takes an array of strings and returns an array of strings longer than 5 characters (spaces count)
 function makeStrings(arr){
   return arr.filter(str => str.length > 5);
  // let greaterLength = [];
  // for(let str of arr){
  //    if (str.length > 5) {
  //     greaterLength.push(str)
  //    }
  // }
  // return greaterLength;

  }

  //const inputArray = ["apple" , "car", "house" ,"people"]

console.log(makeStrings(inputArray));





// 3. Write a function that takes an array of strings, and returns a new array of the lengths of strings longer than 5 characters

// 4. Write a function that takes an array of numbers and returns the sum of all even numebrs

// 5. Write a function that takes an array of numbers and returns the min num

// 6. Write a function that takes in a string and returns the character that appears the most times (only letters count)
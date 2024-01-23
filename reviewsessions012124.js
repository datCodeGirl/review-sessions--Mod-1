// ---------------- Instructions -------------------
// 1. Copy the content of this file to a local file in your local review git repo
// 2. Solve each function
// 3. Call the function and console log the result with 2 different inputs
// 4. add/commit and push after each function



// Given an array of numbers and a given target. return the target if it's in the array or undefined if it's not

//function findTarget(arr, target){
//     for (let i = 0; i < arr.length; i++){
//         let currentNum = arr[i];
//         if (currentNum === target) {
//             return currentNum;
//         // } else { // we dont need the else statement. it will return undefined
//         }
        
//     }
//     return undefined;

// }
//   //OR USING A ONE LINER - num here means same as element

//   return arr.find((num) => num === target);
  
//  const arr = [3, 12, 9, 6, 17, 22];
//  console.log(findTarget([3, 12, 9, 6, 17, 22], 12));
//  console.log(findTarget([3, 12, 9, 6, 17, 22], 177));

// Given an array of numbers, return the first number that's bigger than 14 or undefined if no number is bigger than 14

// function findFirstNumGreater(arr, numToFind) {
//     for (let i = 0; i< arr.length; i++) {
//         let numToFind = 14;
//         let currNumber = arr[i];
//         if (currNumber > numToFind) {
//             return currNumber;
//         }
//     }
//     return undefined;
// }

//  console.log(findFirstNumGreater([3, 12, 9, 6, 17,22], 14));
//  console.log(findFirstNumGreater([2, 9, 6, 12, 13, 5, 1], 14));

// de


// Given an array of strings, return the first string with length greater than 4 or undefined if no such string is found

//  function findStringLength(arr) {
//     for (let str of arr) {  
//         if (str.length > 4) {
//             return str;
//         }
//     }
//        return undefined;
//  }
//  console.log(findStringLength("pan", "kite", "ape", "antelope"));
 
//  function findStringLength(arr, strLength) {
//      return arr.find((str) => str.length > strLength) || null;

//  }
//  console.log(findStringLength(["pan", "kite", "ape", "antelope"], 5));

//  function findStringLength(arr, str){

//     for (let i = 0; i < arr.length; i++) {
//         let currentStr = arr[i];
//      if (currentStr.length > str) {
//         return currentStr;
//       }
//     }
//      return undefined;
//  }
 //console.log(findStringLength(["pan", "kite", "ape", "antelope"], 5));

//Given an array of Objects and a target id return the first object that matches the id or undefined if no such object is found
// Expected Structure of a SINGLE object - 
/*
{
 id: "Y42C_a",
 name: "Robert",
 occupation: "Chef",
 eyeColor: "green"
}
*/


//  function findTarget(arr, id) {
//      for (let i = 0; i< arr.length; i++) {
//         const obj = arr[i];
//         if (obj.id === id) {
//             return obj;
//         }

//     }
//     return [];
//  }

//   console.log(findTarget([{id: "Y42C_a", name: "Robert", occupation: "Chef", eyeColor: "green"}], "Y42C_a"));
// {
//     id: "Y42C_a",
//     name: "Robert",
//     occupation: "Chef",
//     eyeColor: "green"
//   },
//   {
//     id: "X78B_b",
//     name: "Sophia",
//     occupation: "Engineer",
//     eyeColor: "brown"
//   },
//   {
//     id: "Z29D_c",
//     name: "David",
//     occupation: "Teacher",
//     eyeColor: "blue"
//   },
//   {
//     id: "W15E_d",
//     name: "Alice",
//     occupation: "Artist",
//     eyeColor: "hazel"
//   },
//   {
//     id: "V53F_e",
//     name: "Michael",
//     occupation: "Doctor",
//     eyeColor: "gray"
//   }
  

// Given an array of objects and a target id return a new object with only the name. The structure for a single object in the array would be as the one above. The returned object would look like this - 
/*
{
 name: "Robert"
}
*/
 function findName(arr, target) {
  for (let i = 0; i < arr. length; i++){
    const obj = arr[i];
    if(obj.name === target) {
        return obj;
    }

  } 
 }
const Objects = [
    { name: "Robert" },
    { name: "Sophia" },
    { name: "David" },
    { name: "Alice" },
    { name: "Michael" }
  ];
  
  console.log(findName([{Objects}], {name: "Robert" }));
  
  
  
  
  
// 1.----------------------------------
// Write a function that takes in a string and returns a new string with every word capitalized. Write your own examples to call the function with.

// THIS METHOD IS NOT DYNAMIC
function capitalizedString(str){
    const sentence = " The stray dog is dead.";
//         if (str === sentence) {
//         return (sentence.toUpperCase());

//         } else {
         
//          return null;

//       }
// }

//  console.log(capitalizedString(" The stray dog is dead."));

//  OR 

return sentence.toUpperCase("The stray dog is dead") || null;

//METHOD THAT WORKS WITH THE FIRST LETTER OF THE STRING
function capitalizedStrings(str){
 const words = str.split(" ") // always use const if we are not reassigning
  const capitalizedString = []; // arrays always have to be const

 for(let i = 0; i< words.length; i++) {
    const word = words[i];
    let capitalizedString= word[0].toUpperCase() + word.slice(1).toLowerCase();
    capitalizedStrings.push(capitalWord);

  }
   return capitalizedStrings.join(" ");
} 
   console.log(capitalizedStrings("The stray dog is dead."));

}

   

// 2.------------------------------------     
// Write a function that takes in an object and returns a formatted greeting.
// This is the format of the object - 

function formatGreeting(obj) {
        //  let (arr[i] === obj);
        //  if (name) {
            
        //  }    if(!arr === null) {


        //       {
        //     const john = {firstName: "John", lastName: "Klaus", occupation: "Carpenter" }
        //     const rebecca = {firstName: "Rebecca", lastName: "Cohen",occupation: "Teacher"}
        //       };
            return `Hello ${obj.firstName} ${obj.lastName}, have a great day at your job as a ${obj.occupation}`;    
        // }
        // return null;

 }
 const john = {firstName: "John", lastName: "Klaus", occupation: "Carpenter" }
     const rebecca = {firstName: "Rebecca", lastName: "Cohen",occupation: "Teacher"}

 console.log(formatGreeting(john) === "Hello John Klaus, have a great day at your job as a Carpenter");
  
console.log(formatGreeting(rebecca) === "Hello Rebecca Cohen, have a great day at your job as a Teacher");

formatGreeting(john);
  
//   // 3.----------------------------------
//   // Write a function that takes an array of objects and a targetId and returns a formatted string. Each object in the array will have the same structure as the objects from the previous question plus an id. Use chatGPT to create an array of 10 such objects.
  
//   /* Example Object
//   {
//     id: "Tfjso_4M"
//     firstName: "John",
//     lastName: "Klaus",
//     occupation: "Carpenter"
//   }
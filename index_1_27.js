// 1. Write a function that takes in an array and returns an object where each element in the array is a key, and the values are the number of times each element appears in the array -

function returnKeyValues(arr) {  
    const obj = {}   // create an empty object to count the elements

    for (let i = 0; i < arr.length; i++) { // create a for loop to access each element // you can also use a for..0f loop here
      let currentEle = arr[i] // set the current index to the current element // key === currentEle
        if (obj[currentEle]) { // if the current element is in the obj // you can also use an if/else statement
            obj[currentEle]++; // if it is ,increment the current element 
        }
        if (!obj[currentEle]) { // if the current element is not in the object
          obj[currentEle] = 1; // set the current element to 1
        }
    }
    return obj; // return the object
}
const inputArray = ["apple", "orange", "apple", "banana", "apple", "orange"]
 
// console.log(returnKeyValues(inputArray));
// // Example:
// // { apple: 3, orange: 2, banana: 1}

// //OR you can do the below

// // ------------------------------------------------------------------------

// // 2. Write a function that takes an object and a property name (key), and returns the value of the property. If the property doesn't exist in the object return an error message

// function takeObject(obj, propertyName) {   //create a function that takes an object and key
     
//      if (obj[propertyName]) {
//         return obj[propertyName];
//      } else {
//         return "ERRRORRRR";
//      }
// }    


// //OR USING TENARY
// return obj[key] ? obj[key] : "ERRRRORRRR";

// //OR SHORT CIRUCUITING

// return obj[key] || "ERRROOORRRR"; // short circuiting is using the OR (||)

// console.log(takeObject({}, "green"));
// console.log(takeObject({propertyName: "Ade"}, "PropertyName"))



// ------------------------------------------------------------------------

// 3. Given a person object, update their street to the new given street. The person object will have these properties -


const person = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    address: {
        street: "123 Main St",
        city: "Anytown",
        zip: "12345"
    }
};



// YOUR CODE HERE
person.address.street= "123 Main St,Anytown, 12345";

console.log(person);

// ------------------------------------------------------------------------

// 4. Given the following object, preform the following tasks -
//   a. Log the desk of the second software engineer in the development department
//   b. Log the location of the head of the marketing department
//   c. Log the name of the CEO's executive assistant
//   d. Add yourself as a third software engineer to the development office
//   e. Update the name of the head of marketing to "Johann Marketer"

const companyOrganizationalStructure = {
  companyName: "TechCorp",
  CEO: {
    name: "John CEO",
    office: {
      location: "Floor 10, Building A",
      employees: {
        executiveAssistant: {
          name: "Alice Executive",
          desk: "A101",
        },
      },
    },
  },
  departments: {
    development: {
      head: {
        name: "Bob Head",
        office: {
          location: "Floor 8, Building B",
          employees: {
            softwareEngineer1: {
              name: "Charlie Engineer",
              desk: "B801",
            },
            softwareEngineer2: {
              name: "David Coder",
              desk: "B802",
            },
          },
        },
      },
    },
    marketing: {
      head: {
        name: "Eva Marketer",
        office: {
          location: "Floor 6, Building C",
          employees: {
            marketingSpecialist1: {
              name: "Frank Specialist",
              desk: "C601",
            },
            marketingSpecialist2: {
              name: "Grace Promoter",
              desk: "C602",
            },
          },
        },
      },
    },
  },
};

// YOUR CODE HERE
console.log(companyOrganizationalStructure.departments.development.head.office.employees.softwareEngineer2.desk);
console.log(companyOrganizationalStructure.departments.marketing.head.office.location);
console.log(companyOrganizationalStructure.CEO.office.employees.executiveAssistant.name);
// console.log({companyOrganizationalStructure.assign(softwareEngineer3.Name, "Adeola Aina-Marshall)})

 const addObject= {
    name: "Adeola Aina",
    desk: "B901",
  };

//companyOrganizationalStructure.development.departments.head.office.employees.softwareEngineer3 = addObject

companyOrganizationalStructure.departments.marketing.head.name = "Johann Marketer";
// -------------------------

// -----------------------------------------------

// 5. Given the following variables, create a new object. the key variable should be the key and the value variable should be it's corresponding value. You have to use the variables!

const key = "name";
const value = "Roberto Robertson"

// 6. Write a function that takes an object as it's only parameter and logs each property to the console. The function ONLY LOGS
 
function printObject(obj) {
  for (const property in obj) {
    console.log(`${property} : ${obj[property]}`)
  }
}
const obj= {
  color: "white",
   width: 3, 
   height: 4,
    weight: "23Kilos"
};

console.log(printObject(obj));



// ------------------------------------------------------------------------

// 7. Write a function that takes two objects and checks if they have the same values. HINT: use the (for.. in..) loop
  function objWithSameValues(obj1, obj2) {
    //const string = "same";
    for(const key in obj1){
      if(obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)){
        if (obj1[key] !== obj2[key]){
          
        }
        return "different";
      
      }
      
    }
    return "same";
  }

const obj1 = {white: "color", black: "hue", topaz: "pastel"}
const obj2 = {white: "color", black: "hue"}

console.log(objWithSameValues(obj1, obj2));
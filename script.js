// Challenge 1.1:
// Step 1: Create an object for storing your profile information. The object name can be "studentProfile". below are the keys which are to be added to the object, please add your values for the same:
// studentName,
// studentAge,
// cohortName,
// location,
//hobbies.

// Step 2: Add more then one hobby in the student object.
//Hint: Use Arrays

// Your code goes here

let studentProfile = {
  studentName: "Vanshika Sharma",
  studentAge: 18,
  cohortName: "Kalvium",
  location: "Himachal Pradesh",
  hobbies: ["Reading", "Coding", "writing", "travelling"]
};

// Challenge 1.2: Access the studentName value of the object "studentProfile" using dot "." notation and print the same in console.

let Value = studentProfile.studentName;
console.log(Value);

//Challenge 1.3: Access the cohortName property of the object using Bracket notation ([]).
let cohortNameValue = studentProfile["cohortName"];
console.log(cohortNameValue);

//Challenge 2.1:Create an object using the constructor function for storing the book information. The object name can be "Book". Include the following values .
//title
//author

function book(title, author) {
  this.title = title;
  this.author = author;
}

var myBook = new book("A song of ice and fire", "George R. R. Martin");

//Challenge 2.2: Access the title property of the object "Book" and print the same in console.

console.log("Title: " + myBook.title);
console.log("Author: " + myBook.author);
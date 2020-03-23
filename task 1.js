// Store your name in a varibale.
const name =  "Sogbesan Teniloluwa";


// Store your courses in an array.
const courses =  ["UI/UX", " HTML" , " CSS", " Javascript."];

// Display your name and courses.
console.log('My name is '  +  name  + ' and I am offering ' +  courses);


// If the number of courses you are doing is an even number, find and display all even numbers from 1-200 (inclusive)

for (i = 0; i< courses.length; i++) {
    console.log(courses);
}


if (courses.length % 2 === 0) {

    // find and display all even numbers from 1 - 200
  
    console.log(
  
      "I am offering a total of 4 courses and given that 4 is an even number, therefore the even numbers from 1 - 200 are:"
  
    );
  
    for (var i = 0; i <= 200; i++) {
  
      if (i % 2 === 0) {
  
        console.log(i);
  
      }
  
    }
  
  }
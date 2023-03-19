
// variable diclaration that asks fro input from the user
const marks =parseFloat(str(prompt("Please enter the student's marks (between 0 and 100):"))) ;

//empty declaration of students grade which is from user input
let grade;

//fucntion declaration of studentGrade which passes two parameters(grade and marks)
function studentGrade(marks, grade) {


  //introduced if else statement to check the conditions of marks from user input
if (marks >= 80 && marks <= 100) {     //checks the conditions of marks if its between 80 and 100
   grade = "A";
} else if (marks >= 60 && marks <= 79) {   //checks the conditions of marks if its between 60 and 79
   grade = "B";
} else if (marks >= 50 && marks <= 59) {     //checks the conditions of marks if its between 50 and 59
grade = "C";
} else if (marks >= 40 && marks <= 49) {    //checks the conditions of marks if its between 40 and 49
  grade = "D";
} else if (marks >= 0 && marks < 40) {      //checks the conditions of marks if its between 0 and 40
} else {

 //checks if number input is not between 0 and 100 it should output an error message of invalid input 
  console.log("Invalid input. Please enter marks between 0 and 100.");
}
return grade;
}

//calls the function and its parameters
console.log(studentGrade(marks,grade));


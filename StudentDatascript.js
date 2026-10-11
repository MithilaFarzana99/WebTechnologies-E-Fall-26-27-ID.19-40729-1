console.log("Usage of Variables, Data types and display function \n");
let studentName = prompt("What is you name? \n");
let studentAge = parseInt(prompt("How old are you? \n"));
let studentCGPA = parseFloat(prompt("Enter your CGPA: "));
let studentStatus = prompt("Are you still a student? (yes/no): ") === "yes";
let studentGrade = prompt("Enter your Grade (A/B/C): ").charAt(0);
console.log("\n");
console.log("Displaying Info \n");
console.log("Name: " +studentName);
console.log("Age: " +studentAge);
console.log("CGPA: " +studentCGPA);
console.log("Student Status: " +studentStatus);
console.log("Grade: " +studentGrade);
console.log("\n");
console.log("Storing data in an Array and Displaying using for Loop \n");
let courses = [ "Web Technologies",
				"OOP",
				"Database"];
console.log("list of Courses via loops");
console.log("\n");
for (let i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}
console.log("\n");
let marks = parseInt(prompt("Enter marks to see grade: "));
if (marks >= 80){
	console.log("Grade: A+");
}
else if (marks >= 70){
	console.log("Grade: A");
}
else if (marks >= 60){
	console.log("Grade: B");
}
else {
	console.log("Grade: F");
}
console.log("\n");
function showStudent(name, age){
	console.log("Creating and displaying function passed by parameters");
	console.log("Student's Name: " +name);
	console.log("Student's Age: " +age);
}
showStudent("Mithila",25);
console.log("\n");
console.log("Creating Array and storing names by user input using a loop");
let students=[];
for(let i=0; i<3; i++){
	students[i]=prompt("Enter name: ");
}
for(let i=0; i<students.length; i++){
	console.log(students[i]);
}
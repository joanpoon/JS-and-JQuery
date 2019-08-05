/**
 * This constructor function for student object that has properties of firstName, lastName, and grade
 * With a method called setGrade to set the grade
 * And a method called displayStudent to display the student name and their grades in table form
 *
 * @constructor
 * @author: Joan Poon(Assignment3)
 * @this {Student}
 * @param {string} The first name(firstN), last name(lastN), and grade of student.
 */
function Student(firstN,lastN,grade){
	this.firstName = firstN; 
	this.lastName = lastN;
	this.grade = grade;

	/**
	 * Change the student's grade.
	 *
	 * @param {string} the new grade 
	 * @this {student}
	 * @return The property of object (grade) will be the new grade.
	 */
	this.setGrade = function(grade){
		return this.grade = grade;
	}

	/**
	 * Display student's name and grade in a table form.
	 * With their first name, last name, and grade
	 *
	 * @this {student}
	 * 
	 */
	this.displayStudent = function(){
		document.write("<tr>");
		document.write("<td>" + this.firstName + "</td>");
		document.write("<td>" + this.lastName + "</td>");
		document.write("<td>" + this.grade + "</td>");
		document.write("</tr>");
	}
}

//create first object student1
var student1 = new Student("Jane","Doe","B");
//create first object student2
var student2 = new Student("John","Doe","C");
//create first object student3
var student3 = new Student("Joan","Doe","A++");
//call the setGrade method to change student 1's grade to an A
student1.setGrade("A");


/* (this.setGrade) method testing
1. Called student2.setGrade("123") with logging, student2's grade became 123.
2. Called student1.setGrade("GOOD") with logging, student1's grade became GOOD.
3. Called student3.setGrade("Z") with logging, student3's grade became Z.
*/

/* (this.displayStudent) method testing
1. Created new object: var fruits = new Student("Apple", "Pear", "Orange")
   Called fruits.displayStudent(); Apple Pear Orange were printed on the table.
2. Placed	document.write("<tr>");
			document.write("<td>" + Apple + "</td>");
			document.write("<td>" + Pear + "</td>");
			document.write("<td>" + Orange + "</td>");
			document.write("</tr>");
	in HTML within <table> and <script> tag, it shows up on the table as expected.
*/

/* Full program testing

1. Created new objects:
	var fruits = new Student("Apple", "Pear", "Orange");
	var color = new Student("red", "blue", "green");
	var soda = new Student("coke", "sprite", "7up");
   Then called fruits.displayStudent(); color.displayStudent(); soda.displayStudent();
   Table matched expectation.
 2. Created new objects:
	var aA = new Student("A","a","A++");
	var bB = new Student("B","b","B++");
	var cC = new Student("C","c","C++");
   Then called aA.displayStudent(); bB.displayStudent(); cC.displayStudent();
   Table matched expectation.
 */

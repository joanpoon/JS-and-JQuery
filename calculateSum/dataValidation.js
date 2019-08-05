//Joan Poon, Assignment 2, Data Validation

/**
 * Validate the data submitted (on form) according to the requirement, 
 * if all data are valid, it will call function printData(name,integer1,integer2,num3,num4,num5)
 * 
 *
 * @author: Joan Poon
 * 
 * @return {Boolean} If there is invalid data, alert user for reentry and return false
 * @return {String} If all data submitted are valid
 */

 function validateForm() {
	var name = document.form1.name.value;
	var integer1 = parseFloat(document.form1.integer1.value);
	var integer2 = parseFloat(document.form1.integer2.value);
	var num3 = parseFloat(document.form1.number3.value);
	var num4 = parseFloat(document.form1.number4.value);
	var num5 = parseFloat(document.form1.number5.value);
	var status = true;


	if (name.length < 2 ) {
		alert("Your name must be greater than 2 characters, please try again.");
		status = false;
	}
	if (integer1<1 || integer1>100 || Math.floor(integer1)!=integer1) {
		alert("Integer 1 should be between 1 and 100, please try again.");
		status = false;
	}
	if (integer2<50 || integer2>150 || Math.floor(integer2)!=integer2) {
		alert("Integer 2 should be between 50 and 150, please try again.");
		status = false;
	}
	if (num3 > 0 || num3==0 || isNaN(num3)) {
		alert("Number 3 should be a negative number, please try again.");
		status = false;
	}
	if (isNaN(num4)) {
		alert("Number 4 should be a number, please try again.");
		status = false;
	}
	if (isNaN(num5)) {
		alert("Number 5 should be a number, please try again.");
		status = false;
	} 
	if (status) {
		return printData(name,integer1,integer2,num3,num4,num5);
	}
} 

/**
 * Print the data in the output box, 
 * Data includes highest, lowest, and total value of all input numbers
 * 
 *
 * @author: Joan Poon
 * @param{string} name
 * @param{number} integer1,integer2,num3,num4,num5
 * @return {String} A paragraph will print in the output box
 */
function printData(name,integer1,integer2,num3,num4,num5){
	//calculate highest/lowest/total of all numbers if submitted data are all valid
	var numArray = [integer1,integer2,num3,num4,num5];
	var i = 0; //loop counter
	var total = 0;
	var highest = integer1;
	var lowest = integer1;

		//To get the highest value among all numbers
		for(i = 1; i<5; i++) {
		    if( numArray[i] > highest ) {
		    	highest = numArray[i]; 
		    } 
	 	}

	 	//To get the lowest value among all numbers
	 	for(i = 1; i<5; i++) {
		    if( numArray[i] < lowest) {
		    	lowest = numArray[i]; 
			}
		}

		 //To get the sum of all numbers
		 for(i = 0; i<5; i++){
		 	total = total + numArray[i];
		 }

		//output the information in the form
		return document.form1.outputHere.value = ("Hello, " + name + ".  You entered: " + integer1 + ", " +integer2 + ", " + num3 + ", " + num4 + ", " + num5
		+ ". The largest number entered was " + highest + "."
		+ " The smallest number you entered was " + lowest + ". "
		+ " And the sum of all of the numbers was " + total + ". ");
	}

/* Full program testing:

1. Entered Full name: joan / Integer 1: 50 / Integer 2: 55/ Number 3: -5/ Number 4: 5/ Number 5: 5
   Expected "Hello, joan.  You entered: 50, 55, -5, 5, 5. 
   The largest number entered was 55. The smallest number you entered was -5.  
   And the sum of all of the numbers was 110. " in output box, result confirmed.

2. Entered Full name: j / Integer 1: 50 / Integer 2: 55/ Number 3: -5/ Number 4: 5/ Number 5: 5
   Expected an alert box "Your name must be greater than 2 characters, please try again." 
   and nothing in output box, result confirmed.

3. Entered Full name: HAPPY / Integer 1: 99 / Integer 2: 149/ Number 3: 99/ Number 4: 5/ Number 5: 5
   Expected an alert box "Number 3 should be a negative number, please try again." 
   and nothing in output box, result confirmed.

4. Entered Full name: joan / and left all other boxes blank
   Expected 5 alert box: "Integer 1 should be between 1 and 100, please try again." 
   "Integer 2 should be between 50 and 150, please try again."
   "Number 3 should be a negative number, please try again."
   "Number 4 should be a number, please try again."
   "Number 5 should be a number, please try again."
   And nothing in output box, result confirmed.

5. Entered Full name: joan / Integer 1: 99 / Integer 2: 100/ Number 3: -5/ Number 4: hello/ Number 5: world
   Expected 2 alert box "Number 4 should be a number, please try again." &
   "Number 5 should be a number, please try again." 
   And nothing in output box, result confirmed.


*/
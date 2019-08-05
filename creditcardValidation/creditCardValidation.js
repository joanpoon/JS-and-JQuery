// Joan Poon, Extra credit 1 - Credit Card validation

function validateCreditCard(){
	var num = document.form1.card.value; //get card number input from form
	var pattern = new RegExp("([0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4})"); 
	var res = pattern.test(num);
	var output = ""; //to hold the error message

	//make sure card number input matches pattern
	if(res){


		var trim = num.split('-').join(''); //remove the dashes
		var status = true; //to validate the card number
		var total = 0; //to hold the sum of all digits
		var firstDigit = trim.charAt(0); //to compare the digits
		var validateDigit = false; //to make sure there are at least 2 types of number

		//validate the final digit is even
		if(trim%2 != 0){
			output += " final digit shoule be even number.";
			status = false;
		}

		//get the total of all digits
		for(var i=0; i<16; i++){
			total += parseInt(trim.charAt(i));
			if(firstDigit!=trim.charAt(i)){
				validateDigit = true;
			}
		}

		//validate there is at least 2 types of number
		if(!validateDigit){
			output += " card number should have at least 2 different digits.";
			status = false;
		}

		//make sure sum of all numbers is greater than 16
		if(total <= 16){
			output += " sum of all digits must be greater than 16." ;
			status = false;
		}

		
	} else {
		status = false;
		output += " Wrong pattern.";
	}

	//output error message if there is any
	if(status){
		document.form1.outputHere.value = "Valid entry.";
	}else{
   		document.form1.outputHere.value = ( "Invalid entry:" + output);
	}

	return status;

}

/* Full program testing 
1: entered "hello", result: Invalid entry: Wrong pattern.
2: entered "0000-0000-0000-0000", result: Invalid entry: 
   card number should have at least 2 different digits. sum of all digits must be greater than 16.
3: entered "0000-0000-0000-9876", result: Valid entry.
4: entered "0000-0000-0000-9877", result: Invalid entry: final digit shoule be even number.
5: entered "a923-3211-9c01-1112", result: Invalid entry: Wrong pattern.

All result matches expectation.
*/

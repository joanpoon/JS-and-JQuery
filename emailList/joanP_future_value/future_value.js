//Joan Poon Assignment 5 part 1

//function runs when the website finished loading
//it draws focus on the textbox, validate input, calculates and outputs future value 
$(document).ready(function(){
	$("#investment").focus(); //focus on the investment amount text box

	//click event when user clicks calculate button, it validate the inputs, 
	//calculates the future value
	//then output it in the future value textbox
	$("#calculate").click(function(){
		//jquery selectors to get input
		var investment = parseFloat( $("#investment").val() );
	    var annualRate = parseFloat( $("#rate").val() );
	    var years = parseInt( $("#years").val() );
		
		if (isNaN(investment) || investment <= 0) {
			alert("Investment must be a valid number greater than zero.");
		} 
		else if(isNaN(annualRate) || annualRate <= 0) {
			alert("Annual rate must be a valid number greater than zero.");
		}
		else if(isNaN(years) || years <= 0) {
			alert("Years must be a valid number\nand greater than zero.");
		}
		// if all entries are valid, calulate future value
		else {
			futureValue = investment;
			for ( i = 1; i <= years; i++ ) {
				futureValue += futureValue * annualRate / 100;
			}
			//print futurevalue in #future_value
			$("#future_value").val(futureValue.toFixed());
		}
		//moves the focus back to the Investment Amount text box
		$("#investment").focus();
	});
});

/*
Full program testing: 
1. Entered investment amount 50; annual interest rate 5; number of years: 2.
   Output: future value 55
2. Entered investment amount hello
   Output: alert box "Investment must be a valid number greater than zero."
3. Entered annual interest rate -10
   Output: alert box "Annual rate must be a valid number greater than zero."
4. Entered Number of years ten
   Output: alert box "Years must be a valid number and greater than zero."

* focus moves back to the Investment Amount text box each time the Calculate button is clicked.
* All result matches expectation.

*/
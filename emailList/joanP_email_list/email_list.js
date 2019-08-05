//Joan Poon, Assignment 5 part 2

//this function only runs when the webpage finished loading
$(document).ready(function() {
	//while join list button is click, validate the inputs from textboxes
	$("#join_list").click(
		function() {
			var emailAddress1 = $("#email_address1").val();
			var emailAddress2 = $("#email_address2").val();
			var isValid = true;
			
			// validate the first email address
			if (emailAddress1 == "") { 
				$("#email_address1").next().text("This field is required.");
				isValid = false;
			} else {
				$("#email_address1").next().text("");
			} 
			
			// validate the second email address
			if (emailAddress2 == "") { 
				$("#email_address2_error").text("This field is required.");
				isValid = false; 
			} else if (emailAddress1 !== emailAddress2) { 
				$("#email_address2").next().text("This entry must equal first entry.");
				isValid = false;
			} else {
				$("#email_address2").next().text("");
			}
			
			// validate the first name entry  
			if ($("#first_name").val() == "") {
				$("#first_name").next().text("This field is required.");
				isValid = false;
			} 
			else {
				$("#first_name").next().text("");
			}
			
			// submit the form if all entries are valid
			if (isValid) {
				$("#email_form").submit(); 
			}
		} // end function
	);	// end click
	$("#email_address1").focus();

	// clears all of the text boxes when "clear entries" button is clicked
	$("#clear_entries").click(function(){
		$("#email_address1, #email_address2, #first_name").val(""); //clear textboxes
		$("#email_address1, #email_address2, #first_name").next().text("*"); //put the asterisks back
		$("#email_address1").focus(); //moves the focus to the first text box
	});

	//clear textbox and put the asterisks back in span when textbox is double clicked
	$("input").dblclick(function(){
		$(this).val(""); ////clear textboxes
		$(this).next().text("*"); //put the asterisks back
	});
}); // end ready

/* Full program testing:
1. Entered info in all textboxes, clicked clear entries button. 
   Result: all textboxes are cleared, asterisks are back in the span elements;
   		   focus is back to the first text box.
2. Entered info in email address 1 textboxes, double clicked
   Result: email address 1 box is cleared, asterisk is back in the span elements
3. Entered info in email address 2 textboxes, double clicked
   Result: email address 2 box is cleared, asterisk is back in the span elements
4. Entered info in first name textboxes, double clicked
   Result: first name box is cleared, asterisk is back in the span elements

All result matches expectation.
*/
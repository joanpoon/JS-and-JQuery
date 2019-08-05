//Joan Poon, Assignment 2, Calculate sums

/**
 * Calculate the sum of the array, 
 * and determine if the sum of positive numbers greater than/equal to the sum of negative numbers
 *
 * @author: Joan Poon
 * @param {array} numArray The array of numbers for calculation.
 * @return {Boolean} 
 * if true: sum of positive numbers greater than/equal to the sum of negative numbers
 * if false: sum of positive numbers is not greater than/equal to the sum of negative numbers
 */

function calculateSums(numArray){
	document.write("The array of numebers:" + numArray.toString() + "<br>");

	var positiveSum = 0; //to hold the positive result
	var negativeSum = 0; //to hold the negative result
	var i = 0; //loop counter
	var size = numArray.length;

	while(i<size){
		if (numArray[i] > 0) {
			positiveSum += numArray[i];
			i++;
		} else {
			negativeSum += Math.abs(numArray[i]);
			i++;
		}
	}

	if(positiveSum > negativeSum || positiveSum == negativeSum){
		return true;
	} else {
		return false;
	}

}
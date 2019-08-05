// Joan Poon, extra credit 1, cash register

function AddCart(a,b){
	this.name = a;
	this.price1 = b;
}

var cart1 = {name:"apple", price1: 5}
//cart1 = AddCart("2","pear","5");

function cashRegister(cart){
	var total = 0;

	for (var i = 0; i < cart.length; i++) {
    	total += parseInt(cart.price+i); // convert the price to a float and add it to the sum
	}

	document.write(total);
}

cashRegister(cart1);


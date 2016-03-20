// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org

var addItemToCart = function(productName, productPrice) {
	var price = productPrice;
	var newItem = document.createElement('li');
	newItem.innerHTML = productName + "    $" + productPrice;
	newItem.className += "product";
	newItem.onclick = function() {
		newItem.parentNode.removeChild(newItem);
		subtractFromSubTotal(price);
	}
	addToSubtotal(productPrice);
	document.getElementById('itemList').appendChild(newItem);
}

var addToSubtotal = function(price) {
	var currentTotal = parseFloat(document.getElementById('subTotalAmount').innerHTML);
	currentTotal = currentTotal + parseFloat(price);
	document.getElementById('subTotalAmount').innerHTML = currentTotal.toFixed(2);
}

var subtractFromSubTotal = function(price) {
	var currentTotal = parseFloat(document.getElementById('subTotalAmount').innerHTML);
	currentTotal = currentTotal - parseFloat(price);
	document.getElementById('subTotalAmount').innerHTML = currentTotal.toFixed(2);
}
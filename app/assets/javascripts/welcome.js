// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org

var myFunction = function(productName, productPrice) {
	//console.log(productName + ' ' + productPrice);
	var newItem = document.createElement('li');
	newItem.innerHTML = productName + "    $" + productPrice;
	document.getElementById('itemList').appendChild(newItem);
}
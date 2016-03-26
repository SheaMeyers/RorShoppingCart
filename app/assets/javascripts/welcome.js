// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org
var addItemToOrderTable = function(productName) {
	$.ajax({
	  type: 'POST',
	  url: '/orders',
	  data: {'product_id': productName},
	  success: function(resp) {
	  	console.log('Successful call ' + resp);
	  },
	  error: function(requestObject, error, errorThrown) {
	  	console.log('Error call' + requestObject + '\n' + 
	  		error + '\n' + errorThrown);
	  }
	});
}


var addItemToCart = function(productName, productPrice) {
	var price = productPrice;
	var newItem = document.createElement('li');
	addItemToOrderTable(productName);
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
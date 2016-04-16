// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org
var addItemToOrderTable = function(productName) {
	$.ajax({
	  type: 'POST',
	  url: '/orders',
	  data: {'product_id': productName},
	  success: function(resp) {
	  	//Do nothing
	  },
	  error: function(requestObject, error, errorThrown) {
	  	//JavaScript to remove item from cart and show error message
	  }
	});
};

var addItemToCart = function(productName, productPrice) {
	var price = productPrice;
	var newItem = document.createElement('li');
	
	addItemToOrderTable(productName);
	
	newItem.innerHTML = productName + "    $" + productPrice;
	newItem.className += "product";
    newItem.onclick = function() {
	    removeItemFromCart(newItem, price);
    };
    
	addToSubtotal(productPrice);

    document.getElementById('itemList').appendChild(newItem);
};

var removeItemFromCart = function(productElement, productPrice) {
    productElement.parentNode.removeChild(productElement);
    subtractFromSubTotal(productPrice);
};

var convertToCurrency = function(value) {
	var stringValue = value.toString();
	stringValue = stringValue.slice(0, stringValue.length - 2) + '.' + stringValue.slice(stringValue.length - 2, stringValue.length);
	return stringValue;
};

var addToSubtotal = function(price) {
	var currentTotal = parseInt(document.getElementById('subTotalAmount').innerHTML.replace('.',''));
	currentTotal = currentTotal + parseInt(price.replace('.',''));
	document.getElementById('subTotalAmount').innerHTML = convertToCurrency(currentTotal);
};

var subtractFromSubTotal = function(price) {
	var currentTotal = parseInt(document.getElementById('subTotalAmount').innerHTML.replace('.',''));
	currentTotal = currentTotal - parseInt(price.replace('.',''));
	document.getElementById('subTotalAmount').innerHTML = convertToCurrency(currentTotal);
};
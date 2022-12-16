/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function validate(){    
            var fname = document.order_form.fname;    
            var address = document.order_form.address;    
            var email = document.order_form.email;    
            var mobile = document.order_form.mobile; 
			var quantity = document.order_form.quantity;
    
            if (fname.value.length <= 0) {    
                alert("Full Name is required");    
                fname.focus();    
                return false;    
            }    
            if (address.value.length <= 0) {    
                alert("Address is required");    
                address.focus();    
                return false;    
            }   
			    
            if (email.value.length <= 0) {    
                alert("Email Id is required");    
                email.focus();    
                return false;    
            }    
            if (mobile.value.length <= 0) {    
                alert("Mobile number is required");    
                mobile.focus();    
                return false;    
            }    
			if (quantity.value<= 0) {    
                alert("Please enter a valid quantity");    
                quantity.focus();    
                return false; 
			}
		}

function myProduct(element){
 var product = element.getAttribute('value').toString();
  window.localStorage.setItem("productname", product); 
}
function getProduct(){
document.getElementById("result").innerHTML = localStorage.getItem("productname");
window.localStorage.setItem("message","Your Order is on the way");
}
function myMessage(element){
	 var message = element.getAttribute('value').toString();
	 window.localStorage.setItem("message", message);
}
function getMessage(){
	document.getElementById("message").innerHTML = localStorage.getItem("message");
}
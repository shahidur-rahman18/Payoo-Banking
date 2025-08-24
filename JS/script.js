document.getElementById('loginButton')
.addEventListener('click', function(e) {
     e.preventDefault();
     const mobileNumber = 1234567890;
     const pinNumber = 1234;
     const mobileNumberValue=document.getElementById('mobile-number').value
     const mobileNumberValueInt = parseInt(mobileNumberValue)
     
     
     
     const pinNumberValue=document.getElementById('pin-number').value
     const pinNumberValueIntPin = parseInt(pinNumberValue)
     console.log(mobileNumberValueInt,pinNumberValueIntPin)



     if(mobileNumberValueInt === mobileNumber && pinNumberValueIntPin === pinNumber){
        window.location.href = "./home.html"
     }
     else{
        alert('Invalid Mobile Number or Pin')
     }

})
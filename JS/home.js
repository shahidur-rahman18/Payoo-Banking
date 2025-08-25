const validPin=1234

// functon to get input value 
function getInputValue(id){
    const inputField = document.getElementById(id)
    const inputFieldValue =inputField.value;
    const inputFieldValueNumber = parseInt(inputFieldValue);
  return inputFieldValueNumber;
    
    
}


function getInputValueString(id){
    const inputField = document.getElementById(id)
    const inputFieldValue =inputField.value;
    return inputFieldValue;
}


// function inner text
function getInnerText (id){
    const element = document.getElementById(id);
    const elementValue = element.innerText;
    const elementValueNumber = parseInt(elementValue);
    return elementValueNumber;
}



// add money feature
document.getElementById('addmonery-button')
.addEventListener('click',function(e){
    e.preventDefault();

   const bank=  getInputValueString('select-bank')

   const accountNumber=getInputValue('account-number')

   const amount = getInputValue('amount-add')
   const pinNumber = getInputValue('pin-number') //parseInt(document.getElementById('pin-number').value);
   console.log(bank,accountNumber,amount,pinNumber);
   
   const avaiableBalance= getInnerText('avaiable-balance')

   if(accountNumber.length<11){
    alert('Account number must be 11 digit');
    return;
   }
   if(pinNumber!==validPin){
    alert('Invalid Pin number');
    return;
   }
   const totalCurrentBalance=avaiableBalance+amount;
   document.getElementById('avaiable-balance').innerText=totalCurrentBalance;

})

// cashout feature

document.getElementById('withdraw-button')
.addEventListener('click',function(e){
    e.preventDefault();
    const amount = getInputValue('amount-cashout')// parseInt(document.getElementById('amount-cashout').value);
    console.log(amount);

    const avaiableBalance= getInnerText('avaiable-balance')

     const totalCurrentBalance=avaiableBalance-amount;
   document.getElementById('avaiable-balance').innerText=totalCurrentBalance;



})
 
// togggle feature
document.getElementById('add-money-btn')
.addEventListener('click',function(){
    document.getElementById('cashout-parent').style.display='none';
    document.getElementById('add-money-parent').style.display='block';

})

document.getElementById('cashout-btn')
.addEventListener('click',function(){
    document.getElementById('add-money-parent').style.display='none';
    document.getElementById('cashout-parent').style.display='block';

})






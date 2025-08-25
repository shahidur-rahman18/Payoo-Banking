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


// function get innertext
function getInnerText (id){
    const element = document.getElementById(id);
    const elementValue = element.innerText;
    const elementValueNumber = parseInt(elementValue);
    return elementValueNumber;
}
 
// fution set innertext

function setInnerText (value){
    const avaiableBalance= document.getElementById('avaiable-balance')
     avaiableBalance.innerText=value


}


//  function toggle display

function toggleDisplay(id){
   const forms= document.getElementsByClassName('form')
    for(const form of forms){
     form.style.display='none';
    }
    document.getElementById(id).style.display='block';
}



//function to toggle buttons effect
function toggleDisplayEffect(id){
    const formBtns = document.getElementsByClassName('form-btn')
    for( const btn of formBtns){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        btn.classList.add("border-gray-300")
       
    }
    document.getElementById(id).classList.remove("border-gray-300")
    document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f20d]")

 }



// add money feature
document.getElementById('addmonery-button')
.addEventListener('click',function(e){
    e.preventDefault();

   const bank=  getInputValueString('select-bank')

   const accountNumber=getInputValue('account-number')

   const amount = getInputValue('amount-add')
   const pinNumber = getInputValue('pin-number') 
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
   setInnerText(totalCurrentBalance);

})

// cashout feature

document.getElementById('withdraw-button')
.addEventListener('click',function(e){
    e.preventDefault();
    const amount = getInputValue('amount-cashout')// parseInt(document.getElementById('amount-cashout').value);
    console.log(amount);

    const avaiableBalance= getInnerText('avaiable-balance')

     const totalCurrentBalance=avaiableBalance-amount;
    setInnerText(totalCurrentBalance);



})

 
// togggle feature
document.getElementById('add-money-btn')
.addEventListener('click',function(){
    toggleDisplay('cashout-parent')
   toggleDisplayEffect('add-money-btn')

})

document.getElementById('cashout-btn')
.addEventListener('click',function(){
 toggleDisplay('add-money-parent')
   toggleDisplayEffect('cashout-btn')

})
document.getElementById('transfer-btn')
.addEventListener('click',function(){
 toggleDisplay('cashout-parent')
   toggleDisplayEffect('transfer-btn')

})
document.getElementById('get-bonus-btn')
.addEventListener('click',function(){
 toggleDisplay('transfer-money-parent')
   toggleDisplayEffect('get-bonus-btn')

})






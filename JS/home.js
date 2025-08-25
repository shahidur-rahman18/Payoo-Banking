const validPin=1234
const  transactionData=[]

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

    if(amount<=0){
        alert("invalid amount")
        return;
    }

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

//    database for add money
 const data = {
    name :'Add Money',
    data: new Date().toLocaleString()

 }
  transactionData.push(data)
    console.log(transactionData)


})

// cashout feature

document.getElementById('withdraw-button')
.addEventListener('click',function(e){
    e.preventDefault();
    const amount = getInputValue('amount-cashout')// parseInt(document.getElementById('amount-cashout').value);
    console.log(amount);

    const avaiableBalance= getInnerText('avaiable-balance')
     if(amount<=0 || amount>avaiableBalance){
        alert("invalid amount")
        return
    }

     const totalCurrentBalance=avaiableBalance-amount;
    setInnerText(totalCurrentBalance);

     const data = {
        name:"Cash Out",
        date:new Date().toLocaleTimeString()
    }

     transactionData.push(data)
    console.log(transactionData) 


})


      document.getElementById('transactions-button').addEventListener("click",function(){
    const transactionContainer = document.getElementById('transaction-container')
    transactionContainer.innerText = ''

    for(const data of transactionData){
        const div = document.createElement("div")
        div.innerHTML=`
        <div class=" bg-white rounded-xl p-3 flex justify-between items-center mt-3">
              <div class="flex items-center">
                  <div class="p-3 rounded-full bg-[#f4f5f7]">
                    <img src="./assets/wallet1.png" class="mx-auto" alt="" />
                  </div>
                  <div class="ml-3">
                    <h1>${data.name}</h1>
                    <p>${data.date}</p>
                  </div>
              </div>
      
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        `

        transactionContainer.appendChild(div)


    }
})
  



 
// togggle feature
document.getElementById('add-money-btn')
.addEventListener('click',function(){
    toggleDisplay('add-money-parent')
   toggleDisplayEffect('add-money-btn')

})

document.getElementById('cashout-btn')
.addEventListener('click',function(){
 toggleDisplay('cashout-parent')
   toggleDisplayEffect('cashout-btn')

})
document.getElementById('transfer-btn')
.addEventListener('click',function(){
 toggleDisplay('transfer-money-parent')
   toggleDisplayEffect('transfer-btn')

})
document.getElementById('get-bonus-btn')
.addEventListener('click',function(){
 toggleDisplay('get-bonus-parent')
   toggleDisplayEffect('get-bonus-btn')

})


document.getElementById('pay-bill-btn').addEventListener("click",function(){
     toggleDisplay('pay-bill-parent')
    toggleDisplayEffect('pay-bill-btn')
})
document.getElementById('transactions-button').addEventListener("click",function(){
     toggleDisplay('transactions-parent')
     toggleDisplayEffect('transactions-button')
})





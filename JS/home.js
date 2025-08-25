const validPin=1234
document.getElementById('addmonery-button')
.addEventListener('click',function(e){
    e.preventDefault();
   const bank=document.getElementById('select-bank').value;
   const accountNumber=document.getElementById('account-number').value;

   const amount = parseInt(document.getElementById('amount-add').value);
   const pinNumber = parseInt(document.getElementById('pin-number').value);
   console.log(bank,accountNumber,amount,pinNumber);
   
   const avaiableBalance= parseInt(document.getElementById('avaiable-balance').innerText);

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






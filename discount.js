document.getElementById('btn-discount').addEventListener('click',function(){
// getting the value from price input

   const originalPriceElement= document.getElementById('price-field')
   const originalPrice=parseFloat(originalPriceElement.value) 
originalPriceElement.value ='';
//getting the value from discount inout

    const discountRateElement= document.getElementById('discount-field');
const discountRate = parseFloat(discountRateElement.value)
discountRateElement.value ='';
//getting the coupon

   const couponElement= document.getElementById('coupon-field');
   const coupon = couponElement.value;
   
   

   if(couponElement.value!=='DOM'){
alert ('Please enter correct coupon')

couponElement.value ='';
return;
   }


   couponElement.value ='';

   
 // discount price  
   const discountPrice = originalPrice*(discountRate/100);
   
//price after discount---
const priceAfterDiscount= originalPrice-discountPrice;

// saved money-----

let savedMoneyElement=document.getElementById('saved-money');
let savedMoney= parseFloat( savedMoneyElement.innerText);
savedMoneyElement.innerText= discountPrice;
//new price field----

let newPriceElement=document.getElementById('new-price');
let newPrice= parseFloat(newPriceElement.innerText);
newPriceElement.innerText= priceAfterDiscount;

  

   console.log(typeof originalPrice, typeof discountRate, typeof savedMoney, coupon, discountPrice,priceAfterDiscount,newPrice ) 
})
let final = []
window.onload = ()=>{
    final =JSON.parse(localStorage.getItem('order')) || []
    console.log(final);
    order()
    
}



function order(){
    if(final.length==0){
        document.getElementById('order_cart').innerHTML = "Your Cart Is Empty"
    }
   let l = final.length;
   let count = document.querySelectorAll('#order')
   count[0].innerHTML = l
   count[1].innerHTML = l
   let Amount = 0 
   let c= 0;
        
      let trow ="<table><tr><th>Item</th><th>Name</th><th>Price</th><th>Amount</th><th>Quantity</th><th>Total</th></tr>"
      let i= 0; 
        do{  
            c = final[i].qty*final[i].Price
            Amount += c        
            console.log(final[i]);
            trow +=` <tr><td><img src="${final[i]["img"]}" style="width:50px;height:50px;"> </td><td>${final[i]["name"]}</td><td>${final[i]["Price"]}</td><td>Rs.<span id="amt">${c}</span></td><td ><span id="qtyy">${final[i].qty}</span>&nbsp; &nbsp;<button onclick="inc(${i},${final[i]["Price"]})" style="cursor:pointer; background-color:gray;border-radius:4px; padding:2px;"> &plus;</button>
            &nbsp;<button onclick="dec(${i},${final[i]["Price"]})" style="cursor:pointer; background-color:gray;border-radius:4px; padding:2px;"> &minus;</button>
            </td> <td><button style="padding: 5px 10px; background-color: orangered;" onclick="del(${i})">Remove</button></td></tr>`;
            i++;
        }
        while(i<l) 
            trow += `<tr><th colspan='5' style='text-align:right;'>Total</th><td>Rs.<span id="tamt">${Amount}</span></td></tr>
            <tr><td colspan='5'></td><td ><button style="padding: 5px 10px; background-color: orangered;" onclick="">Confirm</button></td></tr>  </table>`

               
        
    let shop = document.getElementById('order_cart').innerHTML = trow
    
      console.log(trow);
    
}

function del(i){
    console.log(i);
     final.splice(i,1)
     localStorage.setItem('order',JSON.stringify(final))
     order()
}




function inc(i,p){
    console.log(p);
   let increment = document.querySelectorAll('#qtyy')
   increment[i].innerHTML++;
   let amt = document.querySelectorAll('#amt')
   final[i].qty = increment[i].innerHTML
   amt[i].innerHTML = p*increment[i].innerHTML
   console.log(final);
   famt(amt)
}

function dec(i,p){
    console.log(p);
   let increment = document.querySelectorAll('#qtyy')
   if(Number(increment[i].innerText)==Number(1)){
    increment[i].setAttribute("disabled","disabled")
   }
   else{
   increment[i].innerHTML--;
   let amt = document.querySelectorAll('#amt')
   amt[i].innerHTML = p*increment[i].innerHTML
   final[i].qty = increment[i].innerHTML
  // amt[i].innerHTML = p*increment[i].innerHTML
   famt(amt)
   }
   
}
 function famt(t){
    console.log(t);
    let ftotal = 0
    for(i=0;i<t.length;i++){
        ftotal += Number(t[i].innerHTML)
    }
    document.querySelector('#tamt').innerHTML = ftotal
 }
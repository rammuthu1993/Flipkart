let storage = []
let order = []
window.onload = ()=>{
   storage = JSON.parse(localStorage.getItem('cart')) || []
   order = JSON.parse(localStorage.getItem("order")) || []
   let l = order.length;
   let count = document.querySelectorAll('#order');
   count[0].innerHTML = l
   count[1].innerHTML = l
  
    display()
    console.log(storage);
}



let j = -1
let info = []
function display(){
    document.querySelector('.cart_detail').innerHTML = storage.map((v,i)=>{
        let {img,name,model,rating,count,Price,imgs} = v
          info.push(...imgs)
          console.log(info);
        return (`
        <div class="showgood">
        <div class="goodshow col-2">
          <div class="col-12" style="border:3px solid blue;"><img onmouseout="" onmouseover="show(${++j})" class="col-12" height="100px" src=${imgs[j]} alt=""></div>
          <div class="col-12"  style="border:3px solid blue;"><img  height="100px" onmouseout="" onmouseover="show(${++j})" class="col-12" src=${imgs[j]} alt=""></div>
          <div class="col-12" style="border:3px solid blue;"><img  height="100px" onmouseout="" onmouseover="show(${++j})" class="col-12" src=${imgs[j]} alt=""></div>
          <div class="col-12" style="border:3px solid blue;"><img  height="100px" onmouseout="" onmouseover="show(${++j})" class="col-12" src=${imgs[j]} alt=""></div>
        </div>
        <div class="col-8" >
        <div id="show" style="height:400px;"><img style="height:400px;" class="col-12" src=${img} alt=""></div>
        <button onclick="add(${i})" id="btn" class="col-6">Add Cart</button>
        <p id="alert" style="background-color:yellow; text-align:center;"></p>
        </div>
       </div>

       <div><p>${name}</p>
       <br>
       <p>${model}</p>
       <br>
       <p><span class="star">&nbsp;${rating}&nbsp;<i class="fa-solid fa-star"></i>&nbsp;</span>(${count})</p>
       </div>
        `)
    }).join("")
}

function show(i){
   document.getElementById('show').innerHTML = `<img style="height:400px;" class="col-12" src=${info[i]} alt="" style="max-height:400px;" >`
}


//console.log(txt);
function add(i){
   let txt = order.map((v)=> {return v.name})
     let nme = storage[i].name
     console.log(txt.includes(nme));
     let btn = document.getElementById("btn")
     if(txt.includes(nme)){
       btn.setAttribute("disabled","disabled")
       document.getElementById("alert").innerHTML = "This Item is already added to Cart"
     }
     else{
    // console.log(txt);
      order.push(storage[i])
      console.log(order);
      
     localStorage.setItem("order",JSON.stringify(order))
     let l1 = order.length 
    
     

   let count = document.querySelectorAll('#order');
   count[0].innerHTML = l1
   count[1].innerHTML = l1
   
     }
    }


let storage = []
let order = []
window.onload = ()=>{
    storage =JSON.parse(localStorage.getItem('cart')) 
    order = JSON.parse(localStorage.getItem("order"))
    let count = document.querySelectorAll('#order');
    count[0].innerHTML = order.length;
    count[1].innerHTML = order.length;
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


function add(i){
  
  console.log(i);
      order.push(storage[i])
      localStorage.setItem('order',JSON.stringify(order))
      console.log(order);
      let l = order.length
   // document.getElementById('order').innerHTML = l
   let count = document.querySelectorAll('#order');
   count[0].innerHTML = l
   count[1].innerHTML = l
   let btn = document.getElementById('btn')
   btn.setAttribute("disabled","disabled")
}

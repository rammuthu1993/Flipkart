let order = []
window.onload = ()=>{
   
  display(mob_list)
  order = JSON.parse(localStorage.getItem("order")) || []
  let count = document.querySelectorAll('#order')
  count[0].innerHTML = order.length
  count[1].innerHTML = order.length
//   let sort = JSON.parse(sessionStorage.getItem("sort")) || []
  let sort = document.getElementsByName("sort")
  console.log(sort[2].removeAttribute("checked"))
  for(let i = 0;i < sort.length ; i++){
    if(sort[i].hasAttribute("checked")){
    sort[i].removeAttribute("checked")
    }
  }
 
}

let mob_list = [{img:"imgs/sh1.webp",name:"SAMSUNG Galaxy Note",model:"(Goat Green, 128 GB)",rating:4,count:9845,Price:17550,qty:1,imgs:["imgs/side1.jpeg","imgs/side2.png","imgs/side3.jpeg","imgs/side4.png"]},
{img:"imgs/sh2.webp",name:"Apple one touch",model:"(Goat Green, 128 GB)",rating:4,count:9845,Price:16490,qty:1,imgs:["imgs/side5.jpeg","imgs/side6.jpeg","imgs/side7.jpeg","imgs/side8.jpeg"]},

{img:"imgs/sh3.webp",name:"Oppo premier",model:"(Goat Green, 128 GB)",rating:4,count:9845,Price:18490,qty:1,imgs:["imgs/side1.jpeg","imgs/side2.png","imgs/side3.jpeg","imgs/side4.png"]},

{img:"imgs/sh4.webp",name:"Moto 5G",model:"(Goat Green, 128 GB)",rating:4,count:9845,Price:7677,qty:1,imgs:["imgs/side5.jpeg","imgs/side6.jpeg","imgs/side7.jpeg","imgs/side8.jpeg"]},

{img:"imgs/sh5.webp",name:"Redmi 9A Pro",model:"(Goat Green, 128 GB)",rating:4,count:9845,Price:9490,qty:1,imgs:["imgs/side1.jpeg","imgs/side2.png","imgs/side3.jpeg","imgs/side4.png"]},

{img:"imgs/sh6.webp",name:"RealMe M Pro",model:"(Goat Green, 128 GB)",rating:4,count:9845,Price:6500,qty:1,imgs:["imgs/side5.jpeg","imgs/side6.jpeg","imgs/side7.jpeg","imgs/side8.jpeg"]},

{img:"imgs/sh7.webp",name:"SAMSUNG Galaxy Lite",model:"(Goat Green, 128 GB)",rating:4,count:9845,Price:4920,qty:1,imgs:["imgs/side1.jpeg","imgs/side2.png","imgs/side3.jpeg","imgs/side4.png"]},

{img:"imgs/sh8.webp",name:"Vivo I5",model:"(Goat Green, 128 GB)",rating:4,count:9845,Price:7890,qty:1,imgs:["imgs/side5.jpeg","imgs/side6.jpeg","imgs/side7.jpeg","imgs/side8.jpeg"]},

{img:"imgs/sh9.webp",name:"VIVO NOTE Pro",model:"(Goat Green, 128 GB)",rating:4,count:9845,Price:8490,qty:1,imgs:["imgs/side1.jpeg","imgs/side2.png","imgs/side3.jpeg","imgs/side4.png"]},

{img:"imgs/sh10.webp",name:"ASUS 5G",model:"(Goat Green, 128 GB)",rating:4,count:9845,Price:8407,qty:1,imgs:["imgs/side5.jpeg","imgs/side6.jpeg","imgs/side7.jpeg","imgs/side8.jpeg"]},

{img:"imgs/sh11.webp",name:"POCO C31",model:"(Goat Green, 128 GB)",rating:4,count:9845,Price:4655,qty:1,imgs:["imgs/side1.jpeg","imgs/side2.png","imgs/side3.jpeg","imgs/side4.png"]}
];

/* let price =false;
let underPrice = false;
let nameSort = false; */


function Price(){
    if(document.getElementsByName("sort")[0]){
    let sPrice = mob_list.sort(function(a,b){ return a.Price - b.Price})
    if(info.length >0){
       info = []
    }
    // document.getElementsByName("sort")[0].setAttribute("checked","checked")
    // sessionStorage.setItem("sort",JSON.stringify("price"))
    
    display(sPrice)
}
}

function Under(){
    if(document.getElementsByName("sort")[1]){
     let under = mob_list.filter((v,i)=> v.Price > 5000 && v.Price < 10000)
     if(info.length >0){
        info = []
    }
    // document.getElementsByName("sort")[1].setAttribute("checked","checked")
    // sessionStorage.setItem("sort",JSON.stringify("underPrice"))
    
     display(under)
    }
}

function namesort(){
    if(document.getElementsByName("sort")[2]){
    let names = mob_list.sort(function(a,b){ 
        x = a.name.toLowerCase(); y = b.name.toLowerCase(); 
        if(x < y){return -1}
        if(x > y){return 1}
        return 0;
    })
    if(info.length >0){
        info = []
    }
    // document.getElementsByName("sort")[2].setAttribute("checked","checked")
    // sessionStorage.setItem("sort",JSON.stringify("nameSort"))
    
    display(names)
}
}

 


let info = []
function display(mob_list) {
    
document.querySelector('.mob_list').innerHTML = mob_list.map((v,i,a)=>{

        let {img,name,model,rating,count,Price,qty,imgs} = v
        info.push(a[i])
         console.log(info);

        return (`

        <div  class="mob_detail " >
        <a href="FlipKartnew3.html" ><img onclick = "buy(${i})" src=${img} alt="" class="col-9">
        <div class="description">
            <p>${name}</p>
            <p>${model}</p>
            <p><span class="star">&nbsp;${rating}&nbsp;<i class="fa-solid fa-star"></i>&nbsp;</span>(${count})</p>
            <h4>Rs.${Price}<span style="color: green;">48% off</span></h4>
        </div> </a>

    </div>
         `)
}).join("")
}
 
 let buycart = []
 function buy(i){
     buycart.push(info[i])
     localStorage.setItem('cart',JSON.stringify(buycart)) 
 }
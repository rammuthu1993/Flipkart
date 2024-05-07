let order = []
window.onload = ()=>{
   order = JSON.parse(localStorage.getItem("order"))
  let count = document.querySelectorAll('#order')
  count[0].innerHTML = order.length
  count[1].innerHTML = order.length
    display(mob_list)
}

let mob_list = [{img:"imgs/sh1.webp",name:"SAMSUNG Galaxy Note",model:"(Goat Green, 128 GB)",rating:4,count:9845,Price:17550,imgs:["imgs/side1.jpeg","imgs/side2.png","imgs/side3.jpeg","imgs/side4.png"]},
{img:"imgs/sh2.webp",name:"Apple one touch",model:"(Goat Green, 128 GB)",rating:4,count:9845,Price:16490,imgs:["imgs/side5.jpeg","imgs/side6.jpeg","imgs/side7.jpeg","imgs/side8.jpeg"]},

{img:"imgs/sh3.webp",name:"Oppo premier",model:"(Goat Green, 128 GB)",rating:4,count:9845,Price:18490,imgs:["imgs/side1.jpeg","imgs/side2.png","imgs/side3.jpeg","imgs/side4.png"]},

{img:"imgs/sh4.webp",name:"Moto 5G",model:"(Goat Green, 128 GB)",rating:4,count:9845,Price:7677,imgs:["imgs/side5.jpeg","imgs/side6.jpeg","imgs/side7.jpeg","imgs/side8.jpeg"]},

{img:"imgs/sh5.webp",name:"Redmi 9A Pro",model:"(Goat Green, 128 GB)",rating:4,count:9845,Price:9490,imgs:["imgs/side1.jpeg","imgs/side2.png","imgs/side3.jpeg","imgs/side4.png"]},

{img:"imgs/sh6.webp",name:"RealMe M Pro",model:"(Goat Green, 128 GB)",rating:4,count:9845,Price:6500,imgs:["imgs/side5.jpeg","imgs/side6.jpeg","imgs/side7.jpeg","imgs/side8.jpeg"]},

{img:"imgs/sh7.webp",name:"SAMSUNG Galaxy Lite",model:"(Goat Green, 128 GB)",rating:4,count:9845,Price:4920,imgs:["imgs/side1.jpeg","imgs/side2.png","imgs/side3.jpeg","imgs/side4.png"]},

{img:"imgs/sh8.webp",name:"Vivo I5",model:"(Goat Green, 128 GB)",rating:4,count:9845,Price:7890,imgs:["imgs/side5.jpeg","imgs/side6.jpeg","imgs/side7.jpeg","imgs/side8.jpeg"]},

{img:"imgs/sh9.webp",name:"VIVO NOTE Pro",model:"(Goat Green, 128 GB)",rating:4,count:9845,Price:8490,imgs:["imgs/side1.jpeg","imgs/side2.png","imgs/side3.jpeg","imgs/side4.png"]},

{img:"imgs/sh10.webp",name:"ASUS 5G",model:"(Goat Green, 128 GB)",rating:4,count:9845,Price:8407,imgs:["imgs/side5.jpeg","imgs/side6.jpeg","imgs/side7.jpeg","imgs/side8.jpeg"]},

{img:"imgs/sh11.webp",name:"POCO C31",model:"(Goat Green, 128 GB)",rating:4,count:9845,Price:4655,imgs:["imgs/side1.jpeg","imgs/side2.png","imgs/side3.jpeg","imgs/side4.png"]}
]


function Price(){
    let sPrice = mob_list.sort(function(a,b){ return a.Price - b.Price})
    if(info.length >0){
        info = []
    }
    display(sPrice)
  
}

function Under(){
     let under = mob_list.filter((v,i)=> v.Price > 5000 && v.Price < 10000)
     if(info.length >0){
        info = []
    }
     display(under)
    
}

function namesort(){
    let names = mob_list.sort(function(a,b){ 
        x = a.name.toLowerCase(); y = b.name.toLowerCase(); 
        if(x < y){return -1}
        if(x > y){return 1}
        return 0;
    })
    if(info.length >0){
        info = []
    }

    display(names)
}

 


let info = []
function display(mob_list) {
    
document.querySelector('.mob_list').innerHTML = mob_list.map((v,i,a)=>{

        let {img,name,model,rating,count,Price,imgs} = v
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
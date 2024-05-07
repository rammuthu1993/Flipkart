let imgslide = ["imgs/slide1.webp","imgs/slide2.webp","imgs/slide3.webp","imgs/slide4.webp"]
let arrlength = imgslide.length
let banner = document.getElementById('imgslide')
let bannerimg = banner.querySelector('img')
console.log(bannerimg);
let i = 0;
function backward() {
  --i
  if(i==-1){
    i = 3
  }
  bannerimg.src = imgslide[i]
}

function forward(){
  ++i;
  if(i == arrlength){
    i = 0;
  }
  bannerimg.src = imgslide[i]
}

setInterval(backward,2000)

let drag = document.querySelector('.best')


console.log(drag);
  
  let p = 0;

function left(){
      p -= 10
      console.log(p);
      if(p >=-80){
        drag.style.left = p+"%" 
      }
      else{
      
    p = -80

      }
   
}



function right(){
    p += 10
    console.log(p);
    if(p <= 0){
        drag.style.left = p+"%"
    }
    else{
        p = 0
    }
  
  }


(function () {
  let w = window.innerWidth
  console.log(w);
  window.onload
  if(w < 763){
    drag.style.left = 0
  }
  console.log(drag);
})();


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


console.log(drag.children);
  
  let p = 0;

function left(){
      p -= 100
      console.log(p);
      if(p >=-Number(drag.clientWidth)){

        drag.style.left = p+"px" 
       console.log( Number(drag.clientWidth));
        
      }
      else{
      
        p = -Number(drag.clientWidth)

      }
   
}



function right(){
    p += 100
    console.log(p);
    if(p < 0){
        drag.style.left = p+"px"
    }
    else{
        p = 0
        drag.style.left = p+"px"
    }
  
  }

/*let fname = document.getElementById("fname")
let lname = document.getElementById("lname")
let mobile = document.getElementById("mob_no")
let email = document.getElementById("email")
let pword = document.getElementById("pword")
let npword = document.getElementById("npword")*/

function signupbanner(){
  
  let ani = document.getElementById("signup")
  ani.style.display = "block"
  ani.style.top = "50px"
}

let cancel = document.getElementById("cancel")
cancel.addEventListener("click",()=>{
  let ani = document.getElementById("signup")
  ani.style.display = "none"
})


//let submit = document.getElementById("submit")


//submit.addEventListener("click",signup)


function signup(){
     console.log(lname.value);
    

     let form = document.querySelector(".form")
     let input = form.querySelectorAll("input")
     let alert1 = form.getElementsByTagName("p")

     
     
      text = /^[A-Za-z]+$/
      if(input[0].value === ""){
       alert1[0].innerHTML = "Please fill input field...."
       alert1[0].style.color = "red"
       return false
      }
      if(!text.test(input[0].value)){
        alert1[0].innerHTML = "Please fill correct format...."
        alert1[0].style.color = "red"
        return false
      }
        console.log(lname.value);
        text = /^[A-Za-z]+$/
      if(input[1].value===""){
        alert1[1].innerHTML = "Please fill input field...."
        alert1[1].style.color = "red"
        return false
      }
      if(!text.test(input[1].value)){
        alert1[1].innerHTML = "Please fill correct format...."
        alert1[1].style.color = "red"
        return false
      }

      number = /^[0-9]+$/
      if(input[2]===""){
        alert1[2].innerHTML =  "Please fill input field...."
        alert1[2].style.color = "red"
        return false
      }
      if(!number.test(input[2].value)){
        alert1[2].innerHTML = "Please fill correct format...."
        alert1[2].style.color = "red"
        return false
      }
      email = /^([A-Za-z0-9])+\@([a-z])+\.([a-z])+$/
      if(input[3]===""){
        alert1[3].innerHTML =  "Please fill input field"
        alert1[3].style.color = "red"
        return false
      }
      if(!email.test(input[3].value)){
        alert1[3].innerHTML = "Please fill correct format...."
        alert1[3].style.color = "red"
        return false
      }
      pword = /^((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$&*]).{6,})+$/
      if(input[4]===""){
        alert1[4].innerHTML =  "Please fill input field"
        alert1[4].style.color = "red"
        return false
      }

      if(!pword.test(input[4].value)){
        alert1[4].innerHTML = "Please fill correct format...."
        alert1[4].style.color = "red"
        return false
      }
     
      if(input[5].value===""){
        alert1[6].innerHTML =  "Please fill input field..."
        alert1[6].style.color = "red"
        return false
      }

      else if(input[5].value!=input[4].value){
        alert1[6].innerHTML = "Password does not match...."
        alert1[6].style.color = "red"
        return false
      }
} 

let psword = document.getElementById("pword")
psword.addEventListener("keydown",idty)

function  idty(){
  let form = document.querySelector(".form")
  let input = form.querySelectorAll("input")
  let alert1 = document.querySelector(".hint")
  let hint = document.getElementById("hint")
  console.log(hint);
  let v = input[4].value
  let l = v.length
 
   if(l<4){
    alert1.innerHTML = "Password is weak...."
    alert1.style.color = "red"
    input[4].style.outlineStyle = "solid"
    input[4].style.outlineColor = "red"
    hint.className = "weak"
  }

  else if(l>3&&l<7){
    alert1.innerHTML = "Password is Medium...."
    alert1.style.color = "yellow"
    input[4].style.outlineStyle = "solid"
    input[4].style.outlineColor = "yellow"
    hint.className = "medium"
    
  }
  
  else if(l>7){
    alert1.innerHTML = "Password is Strong...."
    alert1.style.color = "green"
    input[4].style.outlineStyle = "solid"
    input[4].style.outlineColor = "yellowgreen"
    hint.className = "strong"
  }
 
}

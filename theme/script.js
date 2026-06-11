let bg = document.querySelector("button");
  let a = true;
bg.addEventListener("click" , function(){
   
    if(a){
         bg.style.backgroundColor = " black";
           document.querySelector(".current").style.backgroundColor = " black";
           document.querySelector("h1").style.color = " white";
           bg.style.color = " white";
           document.querySelector("span").textContent = "light";

          document.querySelector(".main").style.backgroundColor = "white";
         a = false;
    }
    else{
           bg.style.backgroundColor = " white";
           bg.style.color = " black";
            document.querySelector(".current").style.backgroundColor = "white";
             document.querySelector("span").textContent = "dark";
            document.querySelector("h1").style.color = "black";
              document.querySelector(".main").style.backgroundColor = "black";
          a = true;
    }
   
});
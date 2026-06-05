let a = document.querySelector("div");
a.addEventListener("mouseover", function(){
a.style.backgroundColor = "gray";
});
a.addEventListener("mouseout" , function(){
    a.style.backgroundColor = "black";
});
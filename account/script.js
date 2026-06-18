let sub = document.querySelector("button");
let inputs = document.querySelectorAll("input");
sub.addEventListener("click" ,function(e){
    e.preventDefault();
    
    let cardElement = document.querySelector(".card");
    cardElement.innerHTML = ""; 
     let content = document.createElement("div")
     content.classList.add("content");

     let h2 = document.createElement("h2");
     h2.textContent = inputs[0].value;

     let h3 = document.createElement("h3");
     h3.textContent = inputs[1].value;

     let imge = document.createElement("div");
     imge.classList.add("img")

    let im = document.createElement("img");
    im.setAttribute("src" ,inputs[2].value);

    imge.appendChild(im);
    document.querySelector(".card").appendChild(imge);
    content.appendChild(h2);
    content.appendChild(h3);
     document.querySelector(".card").appendChild(content);
    
     document.querySelector("form").reset();

});
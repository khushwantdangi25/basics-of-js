let inputs = document.querySelectorAll("input");
let form = document.querySelector("form");
let pro = document.querySelector(".profile");
form.addEventListener("submit" , function(e){
    e.preventDefault();


    let innerb = document.createElement("div")
    innerb.classList.add("innerb");

    let card = document.createElement("div");
    card.classList.add("card");

    let img = document.createElement("img");
    img.setAttribute("src" , inputs[0].value);

    let content = document.createElement("div");
    content.classList.add("content");

    let h2 = document.createElement("h2");
    h2.textContent =  inputs[1].value;

    let h31 = document.createElement("h3");
    h31.textContent =  inputs[2].value;

    let h32 = document.createElement("h3");
    h32.textContent =  inputs[3].value ;

    let h33 = document.createElement("h3");
    h33.textContent =  inputs[4].value ;

    let h34 = document.createElement("h3");
    h34.textContent  =  inputs[5].value;

    content.appendChild(h2);
    content.appendChild(h31);
    content.appendChild(h32);
    content.appendChild(h33);
    content.appendChild(h34);
    card.appendChild(img);
    innerb.appendChild(card);
    innerb.appendChild(content);
    pro.appendChild(innerb);
  form.reset();
});
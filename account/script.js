


const form = document.querySelector("form");
let inputs = document.querySelectorAll("input");

const users = {
    user : [],
    init : function(){
        form.addEventListener("submit" , this.submitForm.bind(this));
    },
    submitForm: function(e){
        e.preventDefault();
        this.addAccount();
    },
    addAccount : function(){
        this.user.push({
            username : inputs[0].value,
            bio : inputs[1].value,
            profile : inputs[2].value,
        });
        form.reset();
        this.userRender();
    },
    userRender: function(){
       
   let cardElement = document.querySelector(".cards");

cardElement.innerHTML = "";

this.user.forEach(function(e) {

    let img = document.createElement("div");
    img.classList.add("img");

    let image = document.createElement("img");
    image.src = e.profile;
    img.appendChild(image);

    let content = document.createElement("div");
    content.classList.add("content");

    let h2 = document.createElement("h2");
    h2.textContent = e.username;

    let h3 = document.createElement("h3");
    h3.textContent = e.bio;

    content.appendChild(h2);
    content.appendChild(h3);

    let card = document.createElement("div");
    card.classList.add("card");

    card.appendChild(img);
    card.appendChild(content);

    cardElement.appendChild(card);
});
    },
    removeAccount : function(){},
};
users.init();
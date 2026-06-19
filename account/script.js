


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
       
    let cardElement = document.querySelector(".card");

    cardElement.innerHTML = "";

    this.user.forEach(function(e) {
        let content = document.createElement("div");
        content.classList.add("content");

        let h2 = document.createElement("h2");
        h2.textContent = e.username;

        let h3 = document.createElement("h3");
        h3.textContent = e.bio;

        let image = document.createElement("img");
        image.src = e.profile;
        
         let img = document.createElement("div");
        content.classList.add("img");
        img.appendChild(image);
         content.appendChild(img);
        content.appendChild(h2);
        content.appendChild(h3);
         
       
        cardElement.appendChild(content);
    });
    },
    removeAccount : function(){},
};
users.init();
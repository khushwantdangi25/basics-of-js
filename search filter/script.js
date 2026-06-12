let users = [{name : "Khushwant", pic : "https://tse3.mm.bing.net/th/id/OIP.ElNoLNw9fjO3FCKrBNhMtwHaL5?rs=1&pid=ImgDetMain&o=7&rm=3", bio : "create yourself"},
    {name : "Jay" , pic : "https://th.bing.com/th/id/OIP.nbuopYKv4CTw1mGUMcgM7AHaLG?w=204&h=306&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", bio : "Money"},
    {name : "Divya" , pic : "https://th.bing.com/th/id/OIP.H3S-oQHMw9okOwSMHmb0jQHaLH?w=208&h=305&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" , bio : "Self Obsessed"},
    {name : "Tanu", pic : "https://th.bing.com/th/id/OIP.JAQW0ViuSEq9ZpX5f0EHYAHaLH?w=204&h=306&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" , bio : "dancing world"},
    {name : "Bhumi", pic : "https://th.bing.com/th/id/OIP.LC5QeewTlOYRlb0-6cg4vAHaNK?w=187&h=333&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", bio : "Make it"},
    {name : "hitesh", pic : "https://th.bing.com/th/id/OIP.OCHyq87SpYxZPNWl8_UezQHaJh?w=208&h=268&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", bio : "urgent only"},
    {name : "vikram" , pic : "https://th.bing.com/th/id/OIP.MCdl_FWPF5UxbRw2coXOAQHaHa?w=208&h=208&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", bio : "anger issue"},
    {name : "panda", pic : "https://th.bing.com/th/id/OIP.Qbrperu0V-aDLxC2COE-ewHaHa?w=208&h=194&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", bio : "sleep sleep "},
    {name : "p2", pic : "https://th.bing.com/th/id/OIP.DJ0LOso38n8jle_UVSw9cgHaLH?w=204&h=306&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", bio : "love panda"},
    {name : "p3", pic : "https://th.bing.com/th/id/OIP.NQIMyGFg_zvCX1u_Jj1rHgHaLG?w=204&h=305&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" , bio : "love panda"},
    {name : "Dhruvi" , pic : "https://th.bing.com/th/id/OIP.HxlOVJJLTcmV63taXN-blwHaLH?w=204&h=306&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", bio : "love hitesh"},
    ];

  function show(arr){
    arr.forEach(e => {
        let card = document.createElement("div");
        card.classList.add("card");
        let img = document.createElement("img");
        img.src = e.pic;
        img.classList.add("img");

        let h2 = document.createElement("h2");
        h2.textContent = e.name;

        let h4 = document.createElement("h4");
        h4.textContent = e.bio;
        
        card.appendChild(img);
        
        card.appendChild(h2);
        card.appendChild(h4);

        document.querySelector(".cards").appendChild(card);
    });
        
    }
 show(users);

const inp = document.querySelector("input");
inp.addEventListener("input", function(){
    let user = users.filter((e) =>{
        return e.name.toLowerCase().includes(inp.value.toLowerCase());
    });
    document.querySelector(".cards").innerHTML = "";
    if(user.length === 0){
         document.querySelector(".cards").innerHTML = "<h1> User Not Found 😫 </h1>";
    }
    else{
        show(user);
    }
    
});


// function call(back){
//     console.log("hello");
//     setTimeout(() =>{
//         console.log("Sorry for wait");
//         back("kali");
        
//     },3000);
//     console.log("happy");
// };

// function back(a){
    
//    setTimeout(() =>{
//         console.log("data is loading");
//     setTimeout(() => {
//         console.log(`hello ${a}`);
//     }, 2000);
//    },2000) ;
// }
// call(back);


// // promies  pratice 
//   const marks = 80; 
// const pr = new Promise ((res , rej ) => {
//     setTimeout(() => {
//          if(marks > 67){
//         res("passs");
//     }
//     else{
//         rej("fail");
//     }
//     },8000);
   
// })

// pr.then((e)=>{
//     console.log(e);
// }).catch((e) =>{
//         console.error(e);
// }) ;
const inp = document.querySelector("input");

const output = document.createElement("h1");
document.body.appendChild(output);

function pr(num) {
    return new Promise((resolve, reject) => {

        if (isNaN(num)) {
            reject("Please enter a valid number");
        } else if (num > 0) {
            resolve("It's a positive number");
        } else if (num < 0) {
            reject("It's a negative number");
        } else {
            resolve("The number is zero");
        }

    });
}

inp.addEventListener("input", () => {

    pr(Number(inp.value))
        .then((msg) => {
            output.textContent = msg;
            output.style.color = "green";
        })
        .catch((msg) => {
            output.textContent = msg;
            output.style.color = "red";
        });

});
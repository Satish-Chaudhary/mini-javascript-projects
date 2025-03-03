let div = document.querySelector(".container");
let points = document.querySelector(".points");
let snk = document.querySelector(".snake");
let btn = document.querySelector(".controls");

btn.addEventListener("click",(e)=>{
    console.log((e.target).innerText);
});
let posx = 30;
let posy = 30;
for (let i = 0; i < posx; i++) {
    console.log(snk.clientX);
    
    
}

// let move = snk.addEventListener("move",() =>{
//     // .classList.add("hide");
//     // .classList.remove("hide");
// });
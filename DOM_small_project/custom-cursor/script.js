let container= document.querySelector(".container");
let h1 = document.querySelector("h1");
let cursor = document.querySelector(".cursor");
container.addEventListener("mousemove",(e)=>{
    cursor.style.left=e.clientX+"px";
    cursor.style.top=e.clientY+"px";
    
});
h1.addEventListener("mouseover",()=>{
    cursor.style.height = "80px";;
    cursor.style.width = "80px";;
});
h1.addEventListener("mouseleave",()=>{
    cursor.style.height = "20px";;
    cursor.style.width = "20px";;
});
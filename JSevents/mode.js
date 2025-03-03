let btn = document.querySelector(".btn");
let body = document.querySelector("body");
let mode = "light";

btn.addEventListener("click", () => {
  if (mode === "light") {
  

    body.style.backgroundColor = "black";
    btn.style.backgroundColor = "white";
    btn.style.color = "black";
    console.log("theme is black");
    mode = "dark";
  } else {
   

    body.style.backgroundColor = "white";
    btn.style.backgroundColor = "black";
    btn.style.color = "white";
    console.log("theme is white");
    mode = "light";
  }
  console.log(mode);
});

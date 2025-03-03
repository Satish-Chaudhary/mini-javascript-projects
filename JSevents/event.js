
let btn1 = document.querySelector(".btn1");
// events => MouseEvent,keyboard,animation and so  on.....
//  onclick,ondblclick.onmouseover

btn1.onclick = () => {
  console.log("clicked");
};

let div = document.querySelector(".box");
div.addEventListener("mouseover",() => {
  console.log("Hovered!");
});
// events objects => target,type,client,clientY
div.onclick = (ev) => {
   div.style.backgroundColor = "purple";
   console.log(ev.target);
   console.log(ev);
   console.log(ev.type);
   console.log(ev.clientX,ev.clientY);
   
};
let btn = document.querySelector(".btn2");
// event-listeners => node.addeventlistner(event,callbackfunction)
// event-listeners => node.removeeventlistner(event,callbackfunction)
btn.addEventListener("click",() => {
  console.log("clicked again-handler1");
});
const rem = btn.addEventListener("click",() => {
  console.log("clicked again-handler2");
});
btn.addEventListener("click",() => {
  console.log("clicked again-handler3");
});
btn.addEventListener("click",() => {
  console.log("clicked again-handler4");
});
btn.removeEventListener("click",rem);


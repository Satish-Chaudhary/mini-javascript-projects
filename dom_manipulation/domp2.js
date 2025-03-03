//           ATTRIBUTES

// access element of  attrubutes : two methods

// 1. getAttributes(attr) ==> to get the attribute value.
// 2. setAttributes(attr,value) ==> change the attributes value


// let div = document.querySelector("div");
// console.log(div);
// let attri = div.getAttribute("class");
// console.log(attri);
//  let attri = div.setAttribute("class","id");
// console.log(attri);
// let at = div.getAttribute("class");
// console.log(at);


//         STYLE

// 1. node.style ==> change the element style 

// div.style.backgroundColor = "green";
// div.style.color = "yellow";
// div.style.fontSize = "1rem";



//             INSERT ELEMENT

// let el = document.createElement("div")

//  1. node.append(el)  ==> adds at the end of node(inside)
//  2. node.prepend(el) ==> adds at the start of node(inside)
// 3. node.before(el)  ==> adds before the node(outside)
// 4. node.after(el)  ==> adds after the node(outside)

// let newdiv2 = document.createElement("div");
// let newdiv3 = document.createElement("button");
// let newdiv4 = document.createElement("p");
// let newdiv5 = document.createElement("h3");
// newdiv2.innerText="div";
// newdiv3.innerText="button";
// newdiv4.innerText="paragraph";
// newdiv5.innerText="heading";
// console.log(newdiv2);
// console.log(newdiv3);
// console.log(newdiv4);
// console.log(newdiv5);
// console.log(newdiv2);
// console.log(newdiv2);
// div.prepend(newdiv2);
// div.before(newdiv5);
// div.append(newdiv4);
// div.after(newdiv3);

//               DELETE NODE

// 1.node.remove() ==>> remove the node
// newdiv2.remove();
// read the appendchild && removechild go to on mdn reference

//                Practice question 1

// let btn = document.createElement("button");
// btn.innerText = "click me!";
// btn.style.backgroundColor = "red";
// btn.style.color = "white";
// console.log(btn);
// document.querySelector("body").prepend(btn);


//                Practice question 2
//  let parag = document.querySelector("p");
//  parag.classList.add("content");

// console.log(parag);
// let pp = parag.setAttribute("class,content");
// console.log(pp);

// note:- classlist property used to add(),remove(),replace(),or toggle() methods.
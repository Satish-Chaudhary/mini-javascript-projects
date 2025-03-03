//           PROPERTIES

// ☺☺☺☺  Practices question 1
let heading = document.querySelector("h2");
console.log(heading);
heading.innerText = heading.innerText + "from apna collage student.";
let box = document.querySelectorAll(".box");
console.log();

// ☺☺☺☺  Practices question 2

box.innerText = "this is div";
console.log(box[0].innerText="this is div");
console.log(box[1].innerText="this is div");
console.log(box[2].innerText="this is div");

// ☻☻☻ Alternative solution
let idx = 1;
for (const div of box) {
    console.log(div.innerText);
    div.innerText = `this is div ${idx}`;
    idx++;
}
let idx1= 1;
for (const i of box) {
    i.innerText=`this is unique div ${idx1}`;
    idx1++;
    console.log(box[i]);
}
function friendrequest() {
  let btn = document.querySelector("button");
    let flag = 0;
  btn.addEventListener("click", () => {
    
    if (flag == 0) {
      btn.style.backgroundColor = " rgb(23, 176, 236)";
      btn.innerHTML = "remove friend";
      flag = 1;
      console.log("add friend");
    } else {
      btn.style.backgroundColor = "  #4CAF50";
      btn.innerHTML = "add friend";
      flag = 0;
      console.log("unfriend");
    }
  });
}
friendrequest();

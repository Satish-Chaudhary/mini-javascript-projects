let card = document.querySelector(".card");
let icon = document.querySelector(".fa-heart");
card.addEventListener("dblclick", () => {
  icon.style.color = "red";
  icon.style.transform = "translate(-50%,-50%) scale(1.2)";
  icon.style.opacity = 0.8;

  setTimeout(() => {
    icon.style.opacity = 0;
  }, 1000);

  setTimeout(() => {
    icon.style.transform = "translate(-50%,-50%) scale(0.8)";
  }, 2000);
});

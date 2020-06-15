let animationControllerIn = function (element) {
  document.querySelector(element).classList.add("animation-2");
  document.querySelector(element).classList.remove("title-animation");
};
let animationControllerOut = function (element) {
  document.querySelector(element).classList.remove("animation-2");
  document.querySelector(element).classList.add("title-animation");
};

let scroll = function (num1, element) {
  document.addEventListener("scroll", (e) => {
    if (document.documentElement.scrollTop > num1) {
      e.stopPropagation();

      animationControllerIn(element);
    } else if (document.documentElement.scrollTop < num1) {
      animationControllerOut(element);
      e.stopPropagation();
    }
  });
};

scroll(80, "#title :nth-child(1)");
scroll(160, "#title :nth-child(2)");
scroll(240, "#title :nth-child(3)");

let projectToggler = document.getElementById("proj-one");
toggler = function () {
  document.getElementById("container").classList.toggle("blur");
  document.getElementById("proj-one-show").classList.toggle("d-none");
};
projectToggler.addEventListener("click", toggler);
document.getElementById("proj-one-show").addEventListener("click", toggler);

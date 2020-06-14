document.addEventListener("scroll", (e) => {
  if (document.documentElement.scrollTop > 80) {
    document.querySelector("#title :nth-child(1)").classList.add("d-none");
  } else if (document.documentElement.scrollTop < 80) {
    document.querySelector("#title :nth-child(1)").classList.remove("d-none");
  } else if (document.documentElement.scollTop > 81) {
    document.querySelector("#title :nth-child(2)").classList.add("d-none");
  } else if (
    document.documentElement.scrollTop > 80 &&
    document.documentElement.scrollTop < 100
  ) {
    document.querySelector("#title :nth-child(2)").classList.remove("d-none");
  }
});

window.onscroll = function () {
  const navbar = document.getElementById("navbar");
  const fixedNav = navbar.offsetTop;

  if (window.scrollY > fixedNav) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
};

const btnSideBar = document.getElementById("btn-side-bar");
const sideBar = document.getElementById("side-bar");

document.addEventListener("click", (e) => {
  if (!btnSideBar.contains(e.target) && !sideBar.contains(e.target)) {
    sideBar.classList.remove("active");
  }
});

btnSideBar.addEventListener("click", (e) => {
  sideBar.classList.toggle("active");
  e.preventDefault();
});

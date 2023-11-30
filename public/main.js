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

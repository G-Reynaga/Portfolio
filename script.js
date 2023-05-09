function toggleMenu() {
  const menuIcon = document.querySelector(".menu-icon");
  const menu = document.querySelector("header .menu-content");
  const menuList = document.querySelector("nav ul");
  menuIcon.classList.toggle("open");
  menu.classList.toggle("open");
  menuList.classList.toggle("open");
}

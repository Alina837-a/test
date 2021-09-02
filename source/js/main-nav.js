var pageHeader  = document.querySelector(".page-header");
var pageHeaderToggle = document.querySelector(".page-header__toggle");
var pageHeaderMenuBurger = document.querySelector(".page-header__menu-burger");
var mainNav = document.querySelector(".main-nav");
mainNav.classList.remove("main-nav--nojs"),
pageHeaderMenuBurger.classList.remove("page-header__menu-burger--nojs"),
pageHeader.classList.remove("page-header--nojs");
pageHeaderToggle.addEventListener("click", function() {
  if (pageHeaderMenuBurger.classList.contains("page-header__menu-burger--closed")) {
    pageHeaderMenuBurger.classList.remove("page-header__menu-burger--closed")
    mainNav.classList.remove("main-nav--closed");
    pageHeaderMenuBurger.classList.add("page-header__menu-burger--opened")
    mainNav.classList.add("main-nav--opened");
    pageHeader.classList.add("page-header--opened");
  } else {
    pageHeaderMenuBurger.classList.add("page-header__menu-burger--closed")
    mainNav.classList.add("main-nav--closed");
    pageHeaderMenuBurger.classList.remove("page-header__menu-burger--opened")
    mainNav.classList.remove("main-nav--opened");
    pageHeader.classList.remove("page-header--opened");
  }
});

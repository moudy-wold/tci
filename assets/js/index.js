let openCloseLang = document.querySelector(".langu .langu_icon");
let lungList = document.querySelector(".langu_list");

let openSearch = document.querySelector(".search_icon");
let closeEmptySearch = document.querySelector(".empty_search");
let search = document.querySelector(".search_form");
let searchInput = document.querySelector(".search_form input");
let valueOfSearchInput;

let openBurgerMenuIcon = document.querySelector(".burgerMenu_icon");
let burgerMenu = document.querySelector(".parent_of_Links_in_small");
let upScroll = document.querySelector(".up_scrool");

let parentOfItemInNavbar = document.querySelectorAll(".parentOfItemInNavbar");
let arrowOpenItemInSideBar = document.querySelectorAll(".parent_of_item_in_navbar .open_close");


openCloseLang.addEventListener("click", function () {
  console.log(lungList);
  burgerMenu.classList.remove("active");
  search.classList.remove("active");
  lungList.classList.toggle("active");
});

openSearch.addEventListener("click", function () {
  lungList.classList.remove("active");
  burgerMenu.classList.remove("active");
  search.classList.add("active");
});

searchInput.addEventListener("keyup", function () {
  valueOfSearchInput = searchInput.value;
  if (valueOfSearchInput != "") {
    closeEmptySearch.classList.add("active");
  } else {
    closeEmptySearch.classList.remove("active");
  }
});

closeEmptySearch.addEventListener("click", function () {
  searchInput.value = "";
  search.classList.remove("active");
  closeEmptySearch.classList.remove("active");
});

openBurgerMenuIcon.addEventListener("click", function () {
  search.classList.remove("active");
  lungList.classList.remove("active");
  burgerMenu.classList.toggle("active");
});

document.addEventListener("click", function (event) {
  const isClickInsideSearch =
    search.contains(event.target) || openSearch.contains(event.target);
  const isClickInsideBurgerMenu =
    burgerMenu.contains(event.target) ||
    openBurgerMenuIcon.contains(event.target);
  const isClickInsideLang =
    lungList.contains(event.target) || openCloseLang.contains(event.target);

  if (!isClickInsideSearch) {
    search.classList.remove("active");
  }
  if (!isClickInsideBurgerMenu) {
    burgerMenu.classList.remove("active");
  }
  if (!isClickInsideLang) {
    lungList.classList.remove("active");
  }
});

// upScroll.addEventListener("click", function () {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// });
 
 

arrowOpenItemInSideBar.forEach((item,index) => {
  item.onclick = function() { 
      parentOfItemInNavbar[index].classList.toggle("active");
  }
});
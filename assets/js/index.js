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
let arrowOpenItemInSideBar = document.querySelectorAll(
  ".parent_of_item_in_navbar .open_close"
);

let itemOfZoomIn = document.querySelector(".item_of_zoom_in");
let zoomInImg = document.querySelector(".zoom_in_img");

let tabsLinkInProduct = document.querySelectorAll(".tabs ul li");
let tabInProduct = document.querySelectorAll(".parent_of_product .tab");

tabsLinkInProduct.forEach((item) => {
  item.onclick = function () {
    for (let i = 0; i < tabsLinkInProduct.length; i++) {
      tabsLinkInProduct[i].classList.remove("active");

      if (
        tabInProduct[i].getAttribute("data-active") ==
        item.getAttribute("data-active")
      ) {
        tabInProduct[i].classList.add("active");
      } else {
        tabInProduct[i].classList.remove("active");
      }
    }
    item.classList.add("active");
  };
});

itemOfZoomIn.addEventListener("click", function () {
  let slider_slices = document.querySelectorAll(
    ".slick-slide.slick-current.slick-active"
  );
  zoomInImg.src = slider_slices[0].childNodes[1].childNodes[1].src;
});

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

arrowOpenItemInSideBar.forEach((item, index) => {
  item.onclick = function () {
    parentOfItemInNavbar[index].classList.toggle("active");
  };
});

document.querySelectorAll(".parent_of_card").forEach((parent) => {
  parent.addEventListener("mouseover", function () {
    // console.log(this.querySelector(this))
    this.querySelector(".first_child_in_parent_od_card").style.top = "0";
  });

  parent.addEventListener("mouseout", function () {
    this.querySelector(".first_child_in_parent_od_card").style.top = "-100%";
  });
});

$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  arrows: true,
  dots: true,
  focusOnSelect: true,
});

$("a[data-slide]").click(function (e) {
  e.preventDefault();
  var slideno = $(this).data("slide");
  $(".slider-nav").slick("slickGoTo", slideno - 1);
});

$(".img-zoom-custom").mousemove(function (e) {
  var $this = $(this);
  var width = $this.width();
  var height = $this.height();
  var mouseX = e.pageX - $this.offset().left;
  var mouseY = e.pageY - $this.offset().top;

  var bgPosX = (mouseX / width) * 100;
  var bgPosY = (mouseY / height) * 100;

  $this.find(".zoom-effect").css({
    "background-size": "200% 200%",
    "background-position": bgPosX + "% " + bgPosY + "%",
  });
});

$(".img-zoom-custom").hover(
  function () {
    var imgSrc = $(this).find("img").attr("src");
    $(this).append('<div class="zoom-effect"></div>');
    $(this)
      .find(".zoom-effect")
      .css("background-image", "url(" + imgSrc + ")");
  },
  function () {
    $(this).find(".zoom-effect").remove();
  }
);

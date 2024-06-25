let openCloseLang = document.querySelector(".lang .lang_icon");
let lungList = document.querySelector('.lang_list');

let openSearch = document.querySelector(".search_icon");
let closeEmptySearch = document.querySelector(".empty_search");
let search = document.querySelector('.search_form');
let searchInput = document.querySelector('.search_form input');
let valueOfSearchInput;

let openBurgerMenuIcon = document.querySelector(".burgerMenu_icon");
let closeburgerMenuIcon = document.querySelector(".close_burgerMenu");
let burgerMenu = document.querySelector('.parent_of_Links_in_small');



openCloseLang.addEventListener("click", function() {
    lungList.classList.toggle("active");     
});


openSearch.addEventListener("click", function() {
    search.classList.toggle("active");     
});

searchInput.addEventListener("keyup", function() {
    valueOfSearchInput = searchInput.value
    if(valueOfSearchInput != "") {
        closeEmptySearch.classList.add("active")
    }else{
        closeEmptySearch.classList.remove("active")
    }
    
});

closeEmptySearch.addEventListener("click", function() {
    searchInput.value= "";
    search.classList.remove("active");
    closeEmptySearch.classList.remove("active")

});

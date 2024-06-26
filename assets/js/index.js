let openCloseLang = document.querySelector(".langu .langu_icon");
let lungList = document.querySelector('.langu_list');

let openSearch = document.querySelector(".search_icon");
let closeEmptySearch = document.querySelector(".empty_search");
let search = document.querySelector('.search_form');
let searchInput = document.querySelector('.search_form input');
let valueOfSearchInput;

let openBurgerMenuIcon = document.querySelector(".burgerMenu_icon");
let burgerMenu = document.querySelector('.parent_of_Links_in_small');
let upScroll = document.querySelector('.up_scrool');



openCloseLang.addEventListener("click", function() {
    console.log(lungList)
    burgerMenu.classList.remove("active")
    search.classList.remove("active");     
    lungList.classList.toggle("active");     
});


openSearch.addEventListener("click", function() {
    lungList.classList.remove("active");     
    burgerMenu.classList.remove("active")
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



openBurgerMenuIcon.addEventListener("click", function() {
    search.classList.remove("active");
    lungList.classList.remove("active");     
    burgerMenu.classList.toggle("active")

});



document.addEventListener("click", function(event) {
    const isClickInsideSearch = search.contains(event.target) || openSearch.contains(event.target);
    const isClickInsideBurgerMenu = burgerMenu.contains(event.target) || openBurgerMenuIcon.contains(event.target);
    const isClickInsideLang = lungList.contains(event.target) || openCloseLang.contains(event.target);
    
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

upScroll.addEventListener("click", function() {
    window.scrollY = 0

});



// Create a script tag and set the YouTube IFrame API source
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Create a function that will create an <iframe> (and YouTube player) after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '290',
        width: '440',
        videoId: 'oDrPsZxk-WM', // Replace with your video ID
        playerVars:{
            playersinline:1,
            autoplay:0,
            controls:1,
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
    console.log("red")
}
var done= false;
// The API calls this function when the player's state changes.
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING &&  !done) {
        // alert('!');
        console.log("Video ended")
    }
}

 

$(window).on("load",function(){
    $(".loading").fadeOut(500,function(){
        $(this).remove();
    });
});

$(".navbar-toggler").on("click",function(){
    let result = $(".menu-btn").hasClass("fa-bars");
    if(result){
        $(".menu-btn").removeClass("fa-bars").addClass("fa-chevron-up");
    }else{
        $(".menu-btn").removeClass("fa-chevron-up").addClass("fa-bars");
    }
});

let screenHeight = $(window).height();
console.log(screenHeight);
$(window).scroll(function () { 
    let currentHeihgt = $(this).scrollTop();
    // console.log(currentHeihgt);
    if(currentHeihgt > screenHeight-150){
        $(".site-nav").addClass("site-nav-scroll");
    }else{
        $(".site-nav").removeClass("site-nav-scroll");
    }
});

function setActive(current){
    $(".nav-link").removeClass("activeSection");
    $(`.nav-link[href= "#${current}"]`).addClass("activeSection");
}

function navScroll(){
    let currentSection = $(`section[id]`);
    console.log(currentSection);

    currentSection.waypoint(function(direction){
        if(direction == "down"){
            let currentSectionId = $(this.element).attr("id");
            // console.log(currentSectionId);
            setActive(currentSectionId)
        }
    },{offset:"100px"});

    currentSection.waypoint(function(direction){
        if(direction == "up"){
            let currentSectionId = $(this.element).attr("id");
            // console.log(currentSectionId)
            setActive(currentSectionId);
        }
    },{offset:"-100px"})
};
navScroll();

//for section parts animate
wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animate__animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();
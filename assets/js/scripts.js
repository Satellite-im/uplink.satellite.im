jQuery(function ($) {
  $(".accordion-content").css("display", "none");
  $(".accordion-title").click(function () {
    $(".accordion-title").not(this).removeClass("open");
    $(".accordion-title").not(this).next().slideUp(300);
    $(this).toggleClass("open");
    $(this).next().slideToggle(300);
  });
});

$(".header-right .theme-triggle a").click(function(){
  $("body").toggleClass("theme-dark");
});

if(window.matchMedia("(prefers-color-scheme: dark)").matches == true) {
  $("body").toggleClass("theme-dark");
}
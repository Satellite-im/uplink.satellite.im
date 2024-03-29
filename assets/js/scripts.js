jQuery(function ($) {
  $(".accordion-content").css("display", "none");
  $(".accordion-title").click(function () {
    $(".accordion-title").not(this).removeClass("open");
    $(".accordion-title").not(this).next().slideUp(300);
    $(this).toggleClass("open");
    $(this).next().slideToggle(300);
  });
});

document.getElementById('theme-toggle').addEventListener('click', function() {
  document.body.classList.toggle('theme-dark'); // Toggles the dark theme on body

  // Toggle icon visibility
  document.getElementById('dark-icon').style.display = document.body.classList.contains('theme-dark') ? 'none' : 'block';  
  document.getElementById('light-icon').style.display = document.body.classList.contains('theme-dark') ? 'block' : 'none';

});

if(window.matchMedia("(prefers-color-scheme: dark)").matches == true) {
  $("body").toggleClass("theme-dark");
}
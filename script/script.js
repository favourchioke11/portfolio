// $("#menu-icon").click(function (e) {
//   e.preventDefault();
//   $("#dropdown").slideToggle(500);
//   // $('#dropbar').toggle(500);
//   // $('#navbar').toggle(500);
// });

$("#menu-icon").click(function () {
    $("#dropdown").toggle(500);
  });

myloop = ["slide"];

incoming = 0;
outgoing = 1;

setInterval(function () {
  $("." + myloop[incoming]).fadeIn(3000);
  $("." + myloop[incoming]).fadeOut(1000);

  incoming++;

  if (incoming > 2) {
    incoming = 0;
  }

  if (outgoing > 2) {
    outgoing = 0;
  }
}, 800);

// var index = 0;
// var timeout = 4000;

// var slides = document.querySelectorAll(".slide");
// initialSlide();

// function initialSlide() {
// //   sliders[index].classList.add("display_slide");
//   setInterval(next,timeout)
// }

// function showSlide(i) {
//     if (i >= slides.length) {
//         index = 0
//     }else if (i < 0){
//         index = slides.length -1
//     }

//     sliders.forEach(slide => {
//         slide.classList.remove("display_slide")
//     });
//     sliders[index].classList.add("display_slide");

// }

$("#hidden").hide();

$("#show-button").click(function (e) {
  e.preventDefault();
  $("#hidden").slideToggle(500);
  $("#show-less").toggle(500);
  // $("#show-button").toggle(500);
});

$("#show-less").click(function (e) {
  e.preventDefault();
  $("#hidden").slideToggle(500);
  $("#show-less").toggle(500);
   $("#show-button").toggle(500);
});

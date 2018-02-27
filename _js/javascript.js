
$( document ).ready(function() {
// Set the date we're counting down to
var countDownDate = new Date("Sep 12, 2018 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Udgivet";
    }
}, 1000);

    // Video
    var video = document.getElementById("myVideo");
    //knap
    var muteButton = $("#mute");
    var playButton = document.getElementById("playknap");




    // Event listener for the mute button
    muteButton.on("click",function() {
         $(".fa-volume-off, .fa-volume-up").toggleClass("fa-volume-up fa-volume-off");
         if (video.muted == false) {
        // Mute the video
        video.muted = true;

          }
      else {
        // Unmute the video
        video.muted = false;

      }
            console.log(video.muted);
    });
});/*lukkker alt sammen*/

// Overlay

$(function(){

  const $menu = $('.knap');
  const $mercOverlay = $('.mercoverlay');

  $menu.on('click', () => {
    $mercOverlay.show();
  })
// aktiver inden færdig
  $mercOverlay.on('mouseleave', () => {
    $mercOverlay.hide();
  })

});

//  slider

$(function() {

  var width = 335;
  var animationSpeed = 500;
  var currentSlide = 1;

  var $slider = $('#slider');
  var $slideContainer = $slider.find('.slides');
  var $slides = $slideContainer.find('.slide');

  // var control_next = $('control_next');

  $('.control_next').click(function () {
    $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function () {
      currentSlide++;
        if (currentSlide === $slides.length-5) {
          currentSlide = 1;
          $slideContainer.css('margin-left', 0);
        }
      });
    });

  $('.control_prev').click(function () {
    $slideContainer.animate({'margin-left': '+='+width}, animationSpeed, function () {
      currentSlide--;
        if (currentSlide === -2) {
          currentSlide = 1;
          $slideContainer.css('margin-left', 0);
        }
      });
    });
});

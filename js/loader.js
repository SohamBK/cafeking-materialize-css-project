$(document).ready(function () {
  $(".modal").modal();
  $(".parallax").parallax();
  $(".sidenav").sidenav();
  $(".slider").slider({ full_width: true });
  $(".parallax").parallax();
  $(".myreviews").carousel({
    numVisible: 7,
    shift: 55,
    padding: 55,
  });
});

function toggleModal() {
  var instance = M.Modal.getInstance($("#modal3"));
  instance.open();
}

var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

//js for top button

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});



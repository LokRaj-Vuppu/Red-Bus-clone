// document.getElementById('car').style.display = 'none';

// document.getElementById('bus_form').addEventListener('click', () => {
//   document.getElementById('car').style.display = 'none';
//   document.getElementById('bus').style.display = 'block';
// })
// document.getElementById('car_form').addEventListener('click', () => {
//   document.getElementById('bus').style.display = 'none';

//   document.getElementById('car').style.display = 'block';
// })

$(document).ready(function(){

$('#car').hide();

$('#bus_form').click(function(){
  $('#car').hide();
  $('#bus').show();
  $(".bus_text").text('Book Bus Tickets')
})

$('#car_form').click(function(){
  $('#bus').hide();
  $('#car').show();
  $('.bus_text').text('Book Car Rental');
})


  // $('a.nav-link').hover(function(){

  //   $(this).css("color", "#cccccc");
  // },
  // function(){
  //   $(this).css("color", 'white');
  // });

});
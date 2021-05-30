// $(document).ready(function(){
//   $("p").click(function(){
//     $(this).hide();
//   });
// });

$(document).ready(function(){

  $("h1").dblclick(function(){

    $(this).hide();

  });


  $("#span").click(function(){

      $(this).hide();
  });

  $(".div").mouseenter(function(){

    alert('you have entered inside div element');

  });

  $("#span").mousedown(function(){
    alert('you have left the span element');
  });

  $(".cont").hover(function(){
      alert('this hover in effect');
  },
  function(){
    alert('this is hover out effect');
  });

  $('input').focus(function(){
    $(this).css("background-color","yellow");
  });

  $('input').blur(function(){
    $(this).css("background-color","red");
  });

});
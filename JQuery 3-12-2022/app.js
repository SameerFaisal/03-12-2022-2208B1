$(document).ready(function(){
    $("#hide").click(function(){
      $("p").animate({color: 'red'});
    });

    $("#show").click(function(){
      $("p").slideDown();
    });
  });
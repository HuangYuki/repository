$(document).ready(function(){

     $('h2').css('color', 'red');

     $("nav a").hover(function(){
       $(this).toggleClass('A');
     });

     $(".Explanation a").hover(function(){
       $(this).toggleClass('B');
     });


     $("button.sun").click(function(){
       $(".isActive").fadeOut(1).removeClass("isActive");
        $("img.sun").fadeIn(600).addClass('isActive');
     });

     $("button.water").click(function(){
       $(".isActive").fadeOut(1).removeClass("isActive");
        $("img.water").fadeIn(600).addClass('isActive');
     });

     $("button.wing").click(function(){
       $(".isActive").fadeOut(1).removeClass("isActive");
        $("img.wing").fadeIn(600).addClass('isActive');
     });

});

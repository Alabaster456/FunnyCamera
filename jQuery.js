$(document).ready(function(){
 //To keep the function going..
 setInterval(bouncer,1000);
  
});

//Function that bounces the text (jQuery UI usage).
//UPDATE: Nows uses setInterval()
function bouncer() {
  $('#message').effect("bounce", {times: 2}, 1000);
  $('#message').effect("bounce", {times: 2}, 1000);
}
//Generates random pictures while playing an audio each time the function is entered..
function picturetaker() {
 $("#color").fadeOut('slow');
  $("#color").fadeIn('slow');
  var SNAP = new Audio(" http://soundjax.com/reddo/87572%5ECameraFlash.mp3");
SNAP.play();
 var generatephotos = Math.floor(Math.random()*9+1);
 switch(generatephotos) {
   case 1:
     $("#funnyperson").delay(1000).fadeIn('slow');
  $("#funnyperson").delay(2000).fadeOut("slow");
     $("#text1").delay(1000).fadeIn('slow');
     $("#text1").delay(2000).fadeOut("slow");
     
        break;                
  
  case 2:
  $("#funnyperson2").delay(1000).fadeIn('slow');
  $("#funnyperson2").delay(2000).fadeOut('slow');
     $("#text2").delay(1000).fadeIn('slow');
     $("#text2").delay(2000).fadeOut('slow');
 break;
   case 3:
     $("#kanye").delay(1000).fadeIn('slow');
     $("#kanye").delay(2000).fadeOut('slow');
     $("#text3").delay(1000).fadeIn('slow');
     $("#text3").delay(2000).fadeOut('slow');
     break;
   case 4:
     $("#bum").delay(1000).fadeIn('slow');
     $("#bum").delay(2000).fadeOut('slow');
     $("#text4").delay(1000).fadeIn('slow');
     $("#text4").delay(2000).fadeOut('slow');
     break;
   case 5:
     $("#crazybum").delay(1000).fadeIn('slow');
    $("#crazybum").delay(2000).fadeOut('slow');
     $("#text5").delay(1000).fadeIn('slow');
     $("#text5").delay(2000).fadeOut('slow');
     break; 
   case 6:
     $("#asian").delay(1000).fadeIn('slow');
    $("#asian").delay(2000).fadeOut('slow');
     $("#text6").delay(1000).fadeIn('slow');
  $("#text6").delay(2000).fadeOut('slow')
    ;
 break;
   case 7: 
     $("#gorilla").delay(1000).fadeIn('slow');
    $("#gorilla").delay(2000).fadeOut('slow'); $("#text7").delay(1000).fadeIn('slow');
$("#text7").delay(2000).fadeOut('slow');
     break;
   case 8:
     $("#woman").delay(1000).fadeIn('slow');
    $("#woman").delay(2000).fadeOut('slow');
     $("#text8").delay(1000).fadeIn('slow');
$("#text8").delay(2000).fadeOut('slow');
     break;
   case 9:
     $("#uglybaby").delay(1000).fadeIn('slow');
     $("#uglybaby").delay(2000).fadeOut('slow');
     $("#text9").delay(1000).fadeIn('slow');
     $("#text9").delay(2000).fadeOut('slow');
 }
}

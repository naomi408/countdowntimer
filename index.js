var heading = $('.heading');
var endDate= new Date("January,1,2020 00:00:01").getTime();


var oneSecond = setInterval(function() {

  var now = new Date().getTime();
  var distance = endDate - now;

  var seconds = Math.floor((distance/1000)%60);
  var minutes = Math.floor((distance/1000/60)%60);
  var hours = Math.floor(distance/(1000*60*60)%24);
  var days = Math.floor(distance/(1000*60*60*24));

  var clock = $('.clock');
  var picture = $('.picture');

  $('.clock').text(days, hours, minutes, seconds);

  $('.clock').innerText= (days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ");



}, 1000);

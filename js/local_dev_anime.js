var setframe;
var changeback;
//loca dev js
$('#link1').click(function() {
  $('#seo').attr('class', 'basic');
  $('body').append("<style>@keyframes topan {0% {clip-path:polygon(" + setframe + ");background-image: url("+changeback+");}100%{clip-path: polygon(57% 0, 0 99%, 86% 77%, 100% 35%); background-image: url(img/green.jpg);}</style>");
  $('#seo').addClass('animatetop');
  changeback = 'img/jase.jpg';
  setframe = '57% 0, 0 99%, 86% 77%, 100% 35%';
});

$('#link2').click(function() {
  $('#seo').attr('class', 'basic');
  $('body').append("<style>@keyframes seo {0% {clip-path:polygon(" + setframe + ");background-image: url("+changeback+");}100%{clip-path: polygon(0 28%, 19% 94%, 87% 100%, 100% 0);background-image: url(img/pink.jpg);}</style>");
  $('#seo').addClass('animateseo');
  changeback = 'img/dog.jpg';
  setframe = '0 28%, 19% 94%, 87% 100%, 100% 0';
})

$('#link3').click(function() {
  $('#seo').attr('class', 'basic');
  $('body').append("<style>@keyframes web {0% {clip-path:polygon(" + setframe + ");background-image: url("+changeback+");}100%{clip-path:polygon(21% 5%, 18% 72%, 73% 93%, 93% 20%);}</style>");
  $('#seo').addClass('animateweb');
    changeback = 'img/pj.jpg';
  setframe = '21% 5%, 18% 72%, 73% 93%, 93% 20%';
});

$('#link4').click(function() {
  $('#seo').attr('class', 'basic');
  $('body').append("<style>@keyframes design {0% {clip-path:polygon(" + setframe + ");background-image: url("+changeback+");}100%{clip-path:polygon(23% 24%, 5% 85%, 100% 100%, 80% 0);}</style>");
  $('#seo').addClass('animatedesign');
  changeback = 'img/br.jpg';
  setframe = '23% 24%, 5% 85%, 100% 100%, 80% 0';
});

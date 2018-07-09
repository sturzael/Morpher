function displaynonetxt(thistext,secondtext) {
  $('.et_pb_column_8 .et_pb_text').addClass('displaytxt').removeClass('undisplaytxt');
  thistext.addClass('undisplaytxt');
  secondtext.addClass('undisplaytxt');
}


var setframe;
var changeback;
var thistext,secondtext;
$('#link1').css('text-decoration', 'line-through');
$('#seo').attr('class', 'basic');
$('body').append("<style>@keyframes topan {0% {clip-path:polygon(" + setframe + ");}100%{clip-path: polygon(57% 0, 0 99%, 86% 77%, 100% 35%);background-image: url('http://nettlnz.nz.w3pcloud.com/wp-content/uploads/2018/07/Nettl-Team-June-2018-Paul-019.jpg');}</style>");
$('#seo').addClass('animatetop');
setframe = '57% 0, 0 99%, 86% 77%, 100% 35%';
thistext = $('.et_pb_text_4');
secondtext = $('.et_pb_text_5');
  displaynonetxt(thistext,secondtext);


$('#link1').click(function() {
  thistext = $('.et_pb_text_4');
  secondtext = $('.et_pb_text_5');
  $('.limorph').css('text-decoration', 'none');
  $(this).css('text-decoration', 'line-through');
  $('#seo').attr('class', 'basic');
  $('body').append("<style>@keyframes topan {0% {clip-path:polygon(" + setframe + ");background-image: url("+changeback+");}100%{clip-path: polygon(57% 0, 0 99%, 86% 77%, 100% 35%); background-image: url('http://nettlnz.nz.w3pcloud.com/wp-content/uploads/2018/07/Nettl-Team-June-2018-Jason-008.jpg');}</style>");
  $('#seo').addClass('animatetop');
  changeback = 'http://nettlnz.nz.w3pcloud.com/wp-content/uploads/2018/07/Nettl-Team-June-2018-Jason-008.jpg';
  setframe = '57% 0, 0 99%, 86% 77%, 100% 35%';
    displaynonetxt(thistext,secondtext);
});

$('#link2').click(function() {
  thistext = $('.et_pb_text_6');
  secondtext = $('.et_pb_text_7');
  $('.limorph').css('text-decoration', 'none');
  $(this).css('text-decoration', 'line-through');
  $('#seo').attr('class', 'basic');
  $('body').append("<style>@keyframes seo {0% {clip-path:polygon(" + setframe + ");background-image: url("+changeback+");}100%{clip-path: polygon(0 28%, 19% 94%, 87% 100%, 100% 0);background-image: url('http://nettlnz.nz.w3pcloud.com/wp-content/uploads/2018/07/Nettl-Team-June-2018-Lola-067-1.jpg');}</style>");
  $('#seo').addClass('animateseo');
  changeback = 'http://nettlnz.nz.w3pcloud.com/wp-content/uploads/2018/07/Nettl-Team-June-2018-Lola-067-1.jpg';
  setframe = '0 28%, 19% 94%, 87% 100%, 100% 0';
    displaynonetxt(thistext,secondtext);
})

$('#link3').click(function() {
  thistext = $('.et_pb_text_8');
  secondtext = $('.et_pb_text_9');
  $('.limorph').css('text-decoration', 'none');
  $(this).css('text-decoration', 'line-through');
  $('#seo').attr('class', 'basic');
  $('body').append("<style>@keyframes web {0% {clip-path:polygon(" + setframe + ");background-image: url("+changeback+");}100%{clip-path:polygon(21% 5%, 18% 72%, 73% 93%, 93% 20%);background-image: url('http://nettlnz.nz.w3pcloud.com/wp-content/uploads/2018/07/Nettl-Team-June-2018-Britta-026.jpg');}</style>");
  $('#seo').addClass('animateweb');
    changeback = 'http://nettlnz.nz.w3pcloud.com/wp-content/uploads/2018/07/Nettl-Team-June-2018-Britta-026.jpg';
  setframe = '21% 5%, 18% 72%, 73% 93%, 93% 20%';
    displaynonetxt(thistext,secondtext);
});

$('#link4').click(function() {
  thistext = $('.et_pb_text_10');
  secondtext = $('.et_pb_text_11');
  $('.limorph').css('text-decoration', 'none');
  $(this).css('text-decoration', 'line-through');
  $('#seo').attr('class', 'basic');
  $('body').append("<style>@keyframes design {0% {clip-path:polygon(" + setframe + ");background-image: url("+changeback+");}100%{clip-path:polygon(23% 24%, 5% 85%, 100% 100%, 80% 0);background-image: url('http://nettlnz.nz.w3pcloud.com/wp-content/uploads/2018/07/Nettl-Team-June-2018-Paul-019.jpg');}</style>");
  $('#seo').addClass('animatedesign');
  changeback = 'http://nettlnz.nz.w3pcloud.com/wp-content/uploads/2018/07/Nettl-Team-June-2018-Paul-019.jpg';
  setframe = '23% 24%, 5% 85%, 100% 100%, 80% 0';
  displaynonetxt(thistext,secondtext);
});

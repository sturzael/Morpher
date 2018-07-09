var thistext,secondtext,changeback,setframe;

const team = [{
    title: 'Jason Williams',
    role: 'Digital Marketing Specialist',
    desc: 'Jason’s passion is in helping businesses navigate the digital marketing highway. With a background in sales and marketing, he has plenty of knowledge and experience to help you take your business to the next step!<b>If you’re looking to develop a new website, branding, marketing strategy or want understand social media, he is the guy to talk to! With his friendly yet professional approach, you’ll find him easy to relate with and easily able to find a solution that works for you! <b>Outside of work, he plays football for local team Dunedin Technical (Weasels), is a hobbyist photographer & loves exploring the outdoors and being involved with St Kilda Surf Club.',
    photourl: 'https://www.nettl.com/nz/wp-content/uploads/2018/06/Nettl-Team-June-2018-Jason-008-e1529617894224.jpg',
    location: 'dunedin',
    showDetail: false,
  },
  {
    title: 'Michael Palmer',
    role: 'Lead Creative',
    desc: 'Mike has many years of experience in design and graphics, working in the small to medium and corporate environments as well as being self-employed for 10 years. Mike’s creative and practical business skills will assist your business develop and provide the market presence you need to grow. <b>Mike grew up in Dunedin and enjoys good movies and fine red wine. He lives with his partner and two boys in Dunedin.',
    photourl: 'https://www.nettl.com/nz/wp-content/uploads/2016/04/Michael-Palmer.jpg',
    location: 'dunedin',
    showDetail: false,
  },
  {
    title: 'Paul Johnson',
    role: 'Dunedin Area Manager',
    desc: 'Paul believes that all businesses deserve to have beautiful websites, marketing material and access to good sales and marketing advice- not just the big guys. The'+' team at Nettl can provide valuable business, marketing and sales knowledge without breaking the bank. We can be your marketing team.<b>Paul has spent most of his'+' life in sales and project management and moved to Dunedin in 2002 to bring up his two girls. He enjoys a good laugh, attempting to keep fit and keeping up with'+' house renovations. Paul is passionate about helping small business succeed in Dunedin.',
    photourl: 'https://www.nettl.com/nz/wp-content/uploads/2018/06/Nettl-Team-June-2018-Paul-019-e1529617666371.jpg',
    location: 'dunedin',
    showDetail: false,
  },
  {
    title: 'Britte van der Pouw',
    role: 'Creative',
    desc: 'JBritte is the latest addition to the Nettl Dunedin team, joining Mike as a creative. With quite a different background as an elite athlete and health professional, her spare time was spent in design. Having worked on international publications as a freelancer, she is looking forward to being part of the team and honing her creative skills.<b>Britte grew up in The Netherlands and moved to New Zealand in 2016. She loves spending time outdoors, and regularly enjoys the surf breaks Dunedin has to offer.',
    photourl: 'https://www.nettl.com/nz/wp-content/uploads/2018/06/Nettl-Team-June-2018-Britta-026-e1529617942245.jpg',
    location: 'dunedin',
    showDetail: false,
  }
]

function displaynonetxt(thistext,secondtext) {
  $('.et_pb_column_8 .et_pb_text').addClass('displaytxt').removeClass('undisplaytxt');
  thistext.addClass('undisplaytxt');
  secondtext.addClass('undisplaytxt');
}


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

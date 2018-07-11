var changeback = 'https://www.nettl.com/nz/wp-content/uploads/2018/06/Nettl-Team-June-2018-Jason-008-e1529617894224.jpg';
var seo = $('#seo');
var body = $('body');
var setframe = '23% 24%, 5% 85%, 100% 100%, 80% 0';
// displaynonetxt(thistext, secondtext);

$.ajax({
  url: "./data/studio_members.json",
  dataType: "json",
  beforeSend: function(xhr) {
    if (xhr.overrideMimeType) {
      xhr.overrideMimeType("application/json");
    }
  },
  success: function(team) {
    console.log(team);
  },
  error: function() {
    console.log("Something Went Wrong");
  }
});


function textfuj() {
  for (var i = 0; i < team.length; i++) {
    $('.middle').append("<li class='member' id='link" + [i] + "'>" + team[i].title + "</li>");
  }

  $('.member').click(function() {
    el = this.id.replace(/[a-z]/g, '');
    $('.animationclass').remove();
    body.append("<style class='animationclass'>.animater" + el + "{animation: animate" + el + " 1s; animation-fill-mode: forwards;}@keyframes animate" + el + " {0% {clip-path:polygon(" + setframe + ");background-image: url(" + changeback + ");}100%{clip-path: polygon(" + team[el].clipPath + "); background-image: url(" + team[el].photourl + ");}</style>");
    seo.addClass('animater' + el);
    changeback = "'" + team[el].photourl + "'";
    setframe = team[el].clipPath;
  });
}

var changeback = 'https://www.nettl.com/nz/wp-content/uploads/2018/06/Nettl-Team-June-2018-Jason-008-e1529617894224.jpg';//defualt image used for the first animation
var seo = $('#seo'); //the div that morphs
var body = $('body');
var setframe = '23% 24%, 5% 85%, 100% 100%, 80% 0'; //default clip path used for the very first animation
$.ajax({//pull the data from the json file - The json file should contain all data relevant to the studio - each studio willl have a differant json file
  url: "./data/studio_members.json",
  dataType: "json",
  beforeSend: function(xhr) {
    if (xhr.overrideMimeType) {//xpecify file type as json
      xhr.overrideMimeType("application/json");
    }
  },
  success: function(team) {
    for (var i = 0; i < team.length; i++) { //for each item in array append li list with name of title
      $('.middle').append("<li class='member' id='link" + [i] + "'>" + team[i].title + "</li>");
    }
    $('.member').click(function() { //each time you click on li do this
      el = this.id.replace(/[a-z]/g, '');//remove all text from id - will turn 'link1' into '1'
      $('.animationclass').remove();//remove the old style animation from the body
      body.append("<style class='animationclass'>.animater" + el + "{animation: animate" + el + " 1s; animation-fill-mode: forwards;}@keyframes animate" + el + " {0% {clip-path:polygon(" + setframe + ");background-image: url(" + changeback + ");}100%{clip-path: polygon(" + team[el].clipPath + "); background-image: url(" + team[el].photourl + ");}</style>"); // append the aniamtion and styling using json data
      seo.addClass('animater' + el);//make animation happen
      changeback = "'" + team[el].photourl + "'";//set this varible as the old image so that the next animation can reference it
      setframe = team[el].clipPath;//set this variable as the old clip path so that the next animation can reference it
    });
  },
  error: function() {
    return;//if the request fails then don't do anything
  }
});

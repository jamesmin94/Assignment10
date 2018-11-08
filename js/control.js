$(document).ready(() => {
  /*
  I saw reference for css method on http://api.jquery.com/css/
  */
  $(".gwpic").css("width", "10%");

  /*
  Code Reference
  Code Academy
  URL: https://www.codecademy.com/courses/learn-jquery-effects/lessons/jquery-effects/exercises/effects-introduction?course_redirect=learn-jquery
  */
  $(".nybutton").on('click',() => {
        $(".nypic").toggle();
        $(".nypicdisc").toggle();
        $(".disappear").toggle();
        $(".appear").toggle();
  });

  /*
  Code Reference
  Code Academy
  URL: https://www.codecademy.com/courses/learn-jquery-effects/lessons/jquery-effects/exercises/fade?course_redirect=learn-jquery
  */
  $(".seabutton").on('click',() => {
        $(".seapic").fadeIn(3000);
        $(".seadisc").fadeIn(3000);
        $(".seabutton").hide();
  });

  /*
  Code Reference
  Code Academy
  URL: https://www.codecademy.com/courses/learn-jquery-effects/lessons/jquery-effects/exercises/fade?course_redirect=learn-jquery
  */
  $(".kfrbutton").on('click',() => {
        $(".kfrpic").slideDown(1000);
        $(".kfrdisc").slideDown(1000);
        $(".kfrbutton").hide();
  });

  /*
  I saw reference for css method on http://api.jquery.com/css/
  */
  $(".gwbutton").on('click',() => {
        $(".gwpic").css("width", "100%");
        $(".gwbutton").hide();
  });
})

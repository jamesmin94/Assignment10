$(document).ready(() => {


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
        $(".seapic").fadeToggle(3000);
        $(".seadisc").fadeToggle(3000);
  });

  /*
  Code Reference
  Code Academy
  URL: https://www.codecademy.com/courses/learn-jquery-effects/lessons/jquery-effects/exercises/sliding?course_redirect=learn-jquery
  */
  $(".kfrbutton").on('click',() => {
        $(".kfrpic").slideToggle(1000);
        $(".kfrdisc").slideToggle(1000);
  });

  /*
  Code Reference
  Code Academy
  URL: https://www.codecademy.com/courses/learn-jquery/lessons/jquery-effects/exercises/fade?action=resume_content_item
  */
  $(".gwbutton").on('click',() => {
        $(".gwpic").fadeOut();


  });
})

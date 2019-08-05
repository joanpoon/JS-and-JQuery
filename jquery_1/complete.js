//Joan Poon Assignment 7

$(document).ready(function() {
  var h = document.getElementsByTagName('head')[0],
      link = document.createElement('link');

  link.href = 'ui-themes/le-frog/jquery-ui-1.10.0.custom.css';
  link.rel = 'jquery-ui.css';
  h.appendChild(link);
  $( "#accordion" ).accordion(); //question 6
  var stop_flag = 0;//question4: 0 normal;1stop

  var $books = $('#books').cycle({
    timeout: 1500, //question 1: change the duration to half a second
    speed: 200,
    pause: true,
    fx:'fade', //question 1: it fades out before the next one fades in
    nowrap:true,//question4: stop after the last slide and disable the buttons
    before: function() {
      $('#slider').slider('value', $('#books li').index(this));
    }
  });
  if ( $.cookie('cyclePaused') ) {
    $books.cycle('pause');
  }
  var $controls = $('<section id="books-controls"></section>').insertAfter($books);
  $('<button>Pause</button>').click(function(event) {
    if(stop_flag === 0){ //question 4: determine if it should stop
      event.preventDefault();
      $books.cycle('pause');
      $.cookie('cyclePaused', 'y');
    }else { //question4: disable button
      $(this).effect('shake', {
        distance: 10
      });
    }
  }).button({
    icons: {primary: 'ui-icon-pause'}
  }).appendTo($controls);
  $('<button>Resume</button>').click(function(event) {
    if(stop_flag === 0){ //question 4: determine if it should stop
      event.preventDefault();
      var $paused = $('ul:paused');
      if ($paused.length) {
        $paused.cycle('resume');
        $.cookie('cyclePaused', null);
      }else { //question 4 : disable button
        $(this).effect('shake', {
          distance: 10
        });
      }
    }
  }).button({
    icons: {primary: 'ui-icon-play'}
  }).appendTo($controls);

  $('<section id="slider"></section>').slider({
    min: 0,
    max: $('#books li').length - 1,
    animate: true, //question 3: make sure the slider animates smoothly
    slide: function(event, ui) {
      if(stop_flag === 0){ //question4: determine if it should stop
        $books.cycle(ui.value);
      }else { //disable slider
        $(this).effect('shake', {
          distance: 10
        });
      }
    }
  }).appendTo($controls);

  $books.hover(function() {
    $books.find('.title').animate({
      backgroundColor: '#eee',
      color: '#000'
    }, 1000);
  }, function() {
    $books.find('.title').animate({
      backgroundColor: '#000',
      color: '#fff'
    }, 1000);
  });

  $('h1').click(function() {
    $(this).toggleClass('highlighted', 'slow', 'easeInExpo');
  });

  $books.find('.title').resizable({
    handles: 's',
    grid:[10,10] //question2: constrain the title box to resize only in ten pixel increments
  });
});

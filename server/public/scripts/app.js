$(document).ready(function(){
    var personIndex = 0;
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        var dataArray = data.omicron;
        var lengthOfArray = data.omicron.length - 1;

        displayPerson(dataArray[0]);
        scrollBoxes(dataArray);
        turnRed();


        $('#next').on('click', nextPerson);
        $('#next').on('click', turnRed);
        $('#prev').on('click', previousPerson);
        $('#prev').on('click', turnRed);

        function nextPerson() {
          $('#ajax-data').fadeOut('slow',function(){

          if(personIndex < lengthOfArray) {

            personIndex++;

            $('#ajax-data').empty();

            $('.box').removeClass('red');
            $('#ajax-data').fadeIn();
            displayPerson(data.omicron[personIndex]);
            turnRed();
          } else {
            personIndex = 0;
            $('#ajax-data').empty();
            $('.box').removeClass('red');
            $('#ajax-data').fadeIn();
            displayPerson(data.omicron[personIndex]);
            turnRed();
            //$('.box' + personIndex).addClass('red');
          }

        });
        }

        function previousPerson() {
          $('#ajax-data').fadeOut('slow', function(){
          if(personIndex > 0) {
            personIndex--;
            $('#ajax-data').empty();
            $('.box').removeClass('red');
            $('#ajax-data').fadeIn();
            displayPerson(data.omicron[personIndex]);
            turnRed();
          } else {
            personIndex = lengthOfArray;
            $('#ajax-data').empty();
            $('.box').removeClass('red');
            $('#ajax-data').fadeIn();
            displayPerson(data.omicron[personIndex]);
            turnRed();
            // $('.box' + personIndex).addClass('red');
          }
          });
        }

        function turnRed() {
          if(personIndex < data.omicron.length) {
            $('.box' + personIndex).toggleClass('red');
          }
        }

      }
    });
});

function displayPerson(person) {
  $('#ajax-data').append('<div class="person"></div>');
  $el = $('#ajax-data').children().last();
  $el.append('<h2>' + person.name + '</h2>');
  $el.append('<p><a href="https://github.com' + person.git_username +'">github.com/'+ person.git_username +'</a></p>');
  $el.append('<p>' + person.shoutout + '</p>');
}

function scrollBoxes(array) {
  array.forEach(function(person, index) {
    $('.miniBoxes').append('<div class="box box' + index + '"></div>');
  });
}

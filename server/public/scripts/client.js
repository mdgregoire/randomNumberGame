$(document).ready(onReady);

function onReady(){
  $('#playGame').hide();
  $('#setUpGameButton').on('click', function(event){
    event.preventDefault();
    let maxNumber = $('#maxSelect').val();
    $.ajax({
      type: 'POST',
      url: '/random',
      data: {max: maxNumber}
    }).done(function(response){
      $('#setUpGame').hide();
      playGame(response);
    }).fail(function(response){
      console.log('We suck', response);
    }); // end .ajax post
  }) // end onClick
} //end onReady

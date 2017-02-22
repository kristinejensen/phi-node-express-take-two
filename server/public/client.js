//on the client side, you don't need to restart the server when you make changes

$(document).ready(function(){
  console.log('jquery sourced');

  $.ajax({
    type: 'GET',
    url: '/fish', // this is just a pointer to an app.get in our app.js file -- doesn't refer to a specific webpage
    success: function(response){ // this function runs upon the successful completion of the request
      console.log('response', response);
      for (var i = 0; i < response.length; i++) {
        $('#fishTank').append('<li>' + response[i].name + '</li>'); //appends the fishiesList object names to the DOM
      }
    }
  });

  $.ajax({
    type: 'GET',
    url: '/fish/first/name',
    success: function(response){ // this function runs upon the successful completion of the request
      console.log('response', response);
      $('#firstFishy').text(response);
    }
  });





});

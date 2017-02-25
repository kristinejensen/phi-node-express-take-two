//on the client side, you don't need to restart the server when you make changes
$(document).ready(function(){
  console.log('jquery sourced');

  getFishData();

  function getFishData(){ // we would wrap these requests in a function so that we can run them whenever we want, not just when the page loads
    $.ajax({
      type: 'GET',
      url: '/fish', // this is just a pointer to an app.get in our app.js file -- doesn't refer to a specific webpage
      success: function(response){ // this function runs upon the successful completion of the request
        console.log('response', response);
        $('#fishTank').empty(); // clears the list so that it doesn't print the entire list everytime
        for (var i = 0; i < response.length; i++) {
          $('#fishTank').append('<li>' + response[i].name + '</li>'); //appends the fishiesList object names to the DOM
        }
      }
    });

    $.ajax({
      type: 'GET',
      url: '/fish/first/name',
      success: function(response){ // this function runs upon the successful completion of the request
        // console.log('response', response);
        $('#firstFishy').text(response);
      }
    });
  }

  $('#newFishButton').on('click', function(){ // everytime the button is clicked, we're going to add an ajax request
  var newFishObject = {}; // creates and empty object
  newFishObject.name = $('#newFishName').val(); // .val retrieves the value from the input button. sets empty object equal to the input value.
  $.ajax({
    type: 'POST',
    url: '/fish/new',
    data: newFishObject, // data becomes req.body on the server side. see app.js. // jquery expects this to be an object.
    succes: function(response) {
      console.log(response);
      getFishData();
    }
  });
});


});

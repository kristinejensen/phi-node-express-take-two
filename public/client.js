$(document).ready(function(){
  console.log('jquery sourced');

  $.ajax({
    type: 'GET',
    url: '/fish',
    success: function(response){ // this function runs upon the successful completion of the request
      console.log('response', response);
    }
  })
});

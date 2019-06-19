var $ = require('jquery');

$(document).ready(function() {

  $.ajax({

    'url': '',
    'method': '',
    'success':function() {
      alert('ok');
    },
    'error': function(){
      alert('si è verificato un errore');
    }

  });



});

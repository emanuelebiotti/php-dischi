var $ = require('jquery');


$(document).ready(function() {


  $.ajax({

    'url': 'http://localhost:8888/php-dischi/data.php',
    'method': 'GET',
    'success': function(){
      alert('la chiamata ajax funziona');
    },
    'error': function(){
      alert('si è verificato un errore');
    }

  });



});

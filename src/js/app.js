var $ = require('jquery');


$(document).ready(function() {


  $.ajax({

    'url': 'http://localhost:8888/php-dischi/data.php',
    'method': 'GET',
    'success': function(data){
      console.log(JSON.parse(data));
    },
    'error': function(){
      alert('si è verificato un errore');
    }

  });



});

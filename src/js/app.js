var $ = require('jquery');


$(document).ready(function() {

var source  = $("#template-disco").html();
var template = Handlebars.compile(source);


  $.ajax({

    'url': 'http://localhost:8888/php-dischi/data.php',
    'method': 'GET',
    'success': function(data){
      var dischi = JSON.parse(data);

      for (var i = 0; i < dischi.length; i++) {
        var disco = dischi[i];
        console.log(disco);
        var context = {
          copertina: disco['immagine_copertina'],
          titolo: disco['titolo_album'],
          nome: disco['nome_artista'],
          anno: disco['anno_uscita']
        }
        var html = template(context);
        $('.main').append(html);
      }


    },
    'error': function(){
      alert('si è verificato un errore');
    }

  });



});

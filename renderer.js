$(document).ready(function(){
    $.ajaxSetup({ cache: false });
    $('#search').keyup(function(){
     $('#result').html('');
     $('#state').val('');
     var searchField = $('#search').val();
     var expression = new RegExp(searchField, "i");
     $.getJSON('data.json', function(data) {
      $.each(data, function(key, value){
       if (value.question.search(expression) != -1 || value.section.search(expression) != -1)
       {
        // $('#result').append('<li class="list-group-item link-class"><img src="'+value.image+'" height="40" width="40" class="img-thumbnail" /> '+value.question+' | <span class="text-muted">'+value.section+'</span></li>');
        $('#result').append('<li class="list-group-item link-class">'+value.question+' | <span class="text-muted">'+value.section+'</span></li>');
       }
      });   
     });
    });
    
    $('#result').on('click', 'li', function() {
     var click_text = $(this).text().split('|');
     $('#search').val($.trim(click_text[0]));
     $("#result").html('');
    });
   });

   $(document).on('click','#result',function(){
    $('.question-answer').animate({top:'-=100'},300);
});

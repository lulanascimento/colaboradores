


$(document).ready(function(){
    var data = $.getJSON( "colaboradoresData.json" , function(data){

$('#json-search').keyup(function(){
            var searchField = $(this).val();
			if(searchField === '')  {
				$('#filter-records').html('');
				return;
			}
			
            var regex = new RegExp(searchField, "i");
            var output = '<div class="row">';
            var count = 1;
			  $.each(data, function(key, val){
				if ((val.event_begin.search(regex) != -1) || (val.event_desc.search(regex) != -1)) {
				  output += '<div class="col-md-6 well">';
				  output += '<div class="col-md-7">';
				  output += '<h5>' + val.event_desc + '</h5>';
				  output += '<p>' + val.event_begin + '</p>'
				  output += '</div>';
				  output += '</div>';
				  if(count%2 == 0){
					output += '</div><div class="row">'
				  }
				  count++;
				}
			  });
			  output += '</div>';
			  $('#filter-records').html(output);
        });
  });
});

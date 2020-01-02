


$(document).ready(function(){
    var data = $.getJSON( "Colaboradores2.json" , function(data){

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
				if ((val.ramal.search(regex) != -1) || (val.funcionario.search(regex) != -1)) {
				  output += '<div class="col-md-6 well">';
				  output += '<div class="col-md-3"><img class="img-responsive" src="'+val.guid+'" alt="'+ val.funcionario +'" /></div>';
				  output += '<div class="col-md-7">';
				  output += '<h5>' + val.funcionario + '</h5>';
				  output += '<p>' + val.funcao + '</p>'
				  output += '<p>' + val.setor + '</p>'
				  output += '<p>' + val.ramal + '</p>'
				  output += '<p>' + val.cel + '</p>'
				  output += '<p>' + val.email + '</p>'
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

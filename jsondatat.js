$(document).ready(function(){
    var data = $.getJSON( "colaboradoresData.json" , function(data){

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
    
        today = yyyy + '-' + mm + '-' + dd;    
        
        alert(today);
			
			  $.each(data, function(key, val){
				if (val.event_begin == today ) {
		//		  // var dataNiver = val.event_desc;
                 alert("OK" + val.event_desc );
                chrome.browserAction.setBadgeBackgroundColor({ color: 'red' });
                chrome.browserAction.setBadgeText({text: val.event_desc});
              }else {  
                // alert(val.event_begin\n val.event_desc); 
                 alert(val.event_begin + "\n" + val.event_desc);
       //             //chrome.browserAction.setBadgeBackgroundColor({ color: 'blue' });
                   //chrome.browserAction.setBadgeText({text: val.event_desc });
               }  
				
                
               });
			  
		   
  });
});

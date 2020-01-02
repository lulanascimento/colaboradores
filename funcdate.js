


$(document).ready(function(){
    var data = $.getJSON( "ColaboradoresData.json" , function(data){

        function ComparaData() {  
         
            var dataHoje = new Date(2010, 00, 15); 
            var dataNiver = new Date(2011, 00, 15);

            if (dataHoje = dataNiver) {  
                alert("TáPegandoFogoBIcho."); 
                // chrome.browserAction.setBadgeBackgroundColor({ color: 'red' });
     
             }else {  
                 alert("OLOCOBICHO."); 
                 //chrome.browserAction.setBadgeBackgroundColor({ color: 'red' });
             }  
         }  
         ComparaData();

  });
});

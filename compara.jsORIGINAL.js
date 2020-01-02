   function ComparaData() {  
         
       var dataHoje = new Date(2010, 00, 15); 
       var dateNiver = new Date(2011, 00, 15);
       if (dataHoje = dataNiver) {  
            
            chrome.browserAction.setBadgeBackgroundColor({ color: 'red' });

        }else {  
            alert("OLOCOBICHO."); 
            chrome.browserAction.setBadgeBackgroundColor({ color: 'red' });
        }  
    }  
    ComparaData();  

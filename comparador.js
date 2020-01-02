var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;
//var dataNiver = "2019-12-30";
   
   function ComparaData() {  
     
       

       if (today == dataNiver) {  
            //alert("Acertou Miseravi!!!")
            chrome.browserAction.setBadgeBackgroundColor({ color: 'red' });
            chrome.browserAction.setBadgeText({text: 'Niver'});

        }else {  
            //alert("Tá no else"); 
            chrome.browserAction.setBadgeBackgroundColor({ color: 'blue' });
        }  
    }  
    ComparaData();  

var data = [{
    "name": "SAMANTA NEVES",
        "code": "2020-02-25"
}, {
    "name": "LAIS AMORIM",
        "code": "2020-02-24"
}, {
    "name": "ILANA SILVA",
        "code": "2020-02-23"
}, {
    "name": "LUIS GUSTAVO",
        "code": "2020-02-22"
}];


function getCountryByCode(code) {
  return data.filter(
      function(data){return data.code == code}
  );
}

var found = getCountryByCode('2020-02-23');

function ComparaData() {  
     
     

    if (found == data.code) {  
         alert("Acertou Miseravi!!!")
        

     }else {  
         alert("Tá no else"); 
         
     }  
 }  
 ComparaData();




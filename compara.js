   function CompareDate() {  
     
       var aniversario =  Date.parse("2019/12/30");
       //aniversario.setHours(0,0,0,0);
       var hoje = new Date(2011, 00, 15);
       hoje.setHours(0,0,0,0);
        console.info(aniversario);
        console.info( hoje.getTime());
   
        console.info(aniversario == hoje.getTime());
    }  
    CompareDate();  

$(document).ready(function(){

    var id = localStorage.getItem("id");
    
   
    $.get("https://harsha555.pythonanywhere.com/banks", 
    {
       id: id
       
   
    }
   ,function(data, status){
       var myJSON = JSON.parse(data);
       console.log(myJSON);
       $("#bname").append(myJSON.bank_name);
       $("#branname").append(myJSON.branch_name);
       $("#accno").append(myJSON.Account_number);
       $("#ifsccode").append(myJSON.Sort_code);
       
       
   });
   
   });
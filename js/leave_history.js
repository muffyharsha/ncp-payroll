
$(document).ready(function(){

    var id = localStorage.getItem("id");
   
    $.get("https://harsha555.pythonanywhere.com/leave_history?", 
    {
       id: id
       
    }
   ,function(data, status){
       var myJSON = JSON.parse(data);
       console.log(myJSON);
       
       $("#sdate").text(myJSON[0].start_date);
       $("#edate").text(myJSON[0].end_date);
       $("#reason").text(myJSON[0].reason);
      
   });
   
   });
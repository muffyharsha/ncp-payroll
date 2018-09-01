
$(document).ready(function(){

    var id = localStorage.getItem("id");
   
    $.get("https://harsha555.pythonanywhere.com/leave_history?", 
    {
       id: id
       
    }
   ,function(data, status){
       var myJSON = JSON.parse(data);
       console.log(myJSON);
       
       $("#sdate").text(myJSON[1].start_date);
       $("#edate").text(myJSON[1].end_date);
      // $("#ndays").text(myJSON.blood_group);
       $("#reason").text(myJSON[1].reason);
      
   });
   
   });
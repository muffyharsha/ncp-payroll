$(document).ready(function(){
    $("#cont").load('workdetails_page.html');

    $("#signout").click(function(){
        window.location = 'index.html';
    });

   
        
        $('#workdetails_nav').click(function(e){
        
            e.preventDefault();
            
            $("#cont").load($(this).attr('href'));
            
            });
            
            $('#personaldetails_nav').click(function(e){
        
                e.preventDefault();
                
                $("#cont").load($(this).attr('href'));
                
                });

    $('#aeditbank').click(function(e){
        
         e.preventDefault();
            
        $("#cont").load($(this).attr('href'));
            
    });
    $('#aaddbank').click(function(e){
        
        e.preventDefault();
           
       $("#cont").load($(this).attr('href'));
           
   });
   $('#aviewbank').click(function(e){
        
    e.preventDefault();
       
   $("#cont").load($(this).attr('href'));
       
});   
$('#Apply_leave').click(function(e){
        
    e.preventDefault();
       
   $("#cont").load($(this).attr('href'));
       
}); 
$('#Leave_history').click(function(e){
        
    e.preventDefault();
       
   $("#cont").load($(this).attr('href'));
       
});     

});

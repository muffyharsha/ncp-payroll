$(document).ready(function(){
    $("#signout").click(function(){
        window.location = 'index.html';
    });

    $('#contact_nav').click(function(e){
        
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

});

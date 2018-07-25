$(document).ready(function(){
    $("#signout").click(function(){
        window.location = 'index.html';
    });

    $('#contact_nav').click(function(e){
        
        e.preventDefault();
        
        $("#cont").load($(this).attr('href'));
        
        });
        
        $('#workdetails_nav').click(function(e){
        
            e.preventDefault();
            
            $("#cont").load($(this).attr('href'));
            
            });
            
            $('#workdetails_nav2').click(function(e){
        
                e.preventDefault();
                
                $("#cont").load($(this).attr('href'));
                
                });


});

$(document).ready(function(){
    $("#signout").click(function(){
        window.location = 'index.html';
    });

    $('a').click(function(e){
        
        e.preventDefault();
        
        $("#cont").load($(this).attr('href'));
        
        });
        



});

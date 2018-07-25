$(document).ready(function(){
    $("#signout").click(function(){
        window.location = 'index.html';
    });
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
    $('a').click(function(){
        $("#wspace").load($(this).attr('href'));
    });
});

$(document).ready(function(){
    $("#submit").click(function(){
        var comm = $("#comment").val();
        
        var isValid = true;
        if (comm == ""){
            alert("Please enter Reason");
            isValid = false;
        }

                
    });
});


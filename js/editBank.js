$(document).ready(function(){
    $("#submit").click(function(){
        var bank = $("#bank").val();
        var branch = $("#branch").val();
        var accno = $("#accno").val();
        var scode = $("#scode").val();
        
        var isValid = true;
        if (bank == ""){
            alert("Please enter bank");
            isValid = false;
        }

        if (branch == ""){
            isValid = false;
            alert("Please enter bank branch");
        }

        if (accno == ""){
            isValid = false;
            alert("Please enter account number");
        }

        if (scode == ""){
            isValid = false;
            alert("Please enter sort code");
        }

        if (accno.length < 8){
            isValid = false;
            alert("Please enter a valid account number");
        }

        var expr_bank =/^[a-zA-Z]*$/;
        if (bank.match(expr_bank) == null){
            isValid = false;
            alert("Please enter valid Bank");
        }

        if (branch.match(expr_bank) == null){
            isValid = false;
            alert("Please enter valid Bank branch");
        }
        
    });
});


$(document).ready(function(){
    $("#submit").click(function(){
        var bank = $("#bank").val();
        var branch = $("#branch").val();
        var accno = $("#accno").val();
        var ifcode = $("#ifcode").val();
        
        var isValid = true;
        if (bank == ""){
            alert("Please enter bank");
            isValid = false;
        }
        var expr_bank =/^[a-zA-Z]*$/;
        if (isValid && bank.match(expr_bank) == null){
            isValid = false;
            alert("Please enter valid Bank");
        }

        if (isValid && branch == ""){
            isValid = false;
            alert("Please enter bank branch");
        }

        if (isValid && branch.match(expr_bank) == null){
            isValid = false;
            alert("Please enter valid Bank branch");
        }

        //var expr_accno = /^[0-9]{11}$/;

        if (isValid && accno == ""){
            isValid = false;
            alert("Please enter account number");
        }

        if (isValid && accno.length != 11){
            isValid = false;
            alert("Please enter valid Account Number");
        }


        if (isValid && ifcode == ""){
            isValid = false;
            alert("Please enter IFSC code");
        }

        

        if(isValid && $('#check')[0].checked == false)
        {
            isValid = false;
            alert("Agree to the terms and conditions");
        }

        var id = localStorage.getItem("id");

    
           console.log("yes");
        $.get("https://harsha555.pythonanywhere.com/add_bank", 
          {
            id: id,
            bank_name:$("#bank").val(),
            branch_name:$("#branch").val(),
            sort_code:$("#ifcode").val(),
            account_number:$("#accno").val()

          }
        ,function(data, status){
            console.log(data);
        });
    
        
    });
});

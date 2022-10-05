$(document).ready(function(){
    $('#form').submit(function(e){

        e.preventDefault();


        var firstname = $('#yname').val();

        var email = $('#email').val();

        var password = $('#pw').val();

        var confirm_password = $('#rpw').val();

        $(".error").remove();

        // Name Validation

        if (firstname.length < 1) {

            $('#yname').after('<span class="error">This field is required</span>');

        }

        else {

            var regEx = /(?=^.{0,40}$)^[a-zA-Z-]+\s[a-zA-Z-]+$/g;

            var validfnmae = regEx.test(firstname);

            if (!validfnmae) {

                $('#yname').after('<span class="error">Enter a valid Name</span>');

            }

        }  
         // Email Validation

         if (email.length < 1) {

            $('#email').after('<span class="error">This field is required</span>');

        }

        else {

            var regEx = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

            var validEmail = regEx.test(email);

            if (!validEmail) {

                $('#email').after('<span class="error">Enter a valid email</span>');

            }

        }   
        // Password Validation

        if (password.length < 1) {

            $('#pw').after('<span class="error">This field is required</span>');

        }

        else {

            var regEx = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;

            var validpswd = regEx.test(password);

            if (!validpswd) {

                $('#psw').after('<span class="error">Enter a valid password</span>');

            }

        }
          // confirm Validation

          if (confirm_password.length < 1) {

            $('#rpw').after('<span class="error">This field is required</span>');

        }

        else {

            var password = $("#pw").val();

            var confirmPassword = $("#rpw").val();

            if (password != confirmPassword)

                $('#rpw').after('<span class="error">Password does not match</span>');

        }

    

});
});



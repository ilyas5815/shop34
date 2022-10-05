// sign in validation

$(document).ready(function(){
    $('#form1').submit(function(e){

        e.preventDefault();

        var email = $('#email1').val();

        var password = $('#pw1').val();


        $(".error").remove();

         // Email Validation

         if (email.length < 1) {

            $('#email1').after('<span class="error">This field is required</span>');

        }

        else {

            var regEx = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

            var validEmail = regEx.test(email);

            if (!validEmail) {

                $('#email1').after('<span class="error">Enter a valid email</span>');

            }

        }   
        // Password Validation

        if (password.length < 1) {

            $('#pw1').after('<span class="error">This field is required</span>');

        }

        else {

            var regEx = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;

            var validpswd = regEx.test(password);

            if (!validpswd) {

                $('#pw1').after('<span class="error">Enter a valid password</span>');

            }

        }

    

});
});

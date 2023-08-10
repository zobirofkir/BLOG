$(document).ready(function() {
    $("#registerButton").click(function() {
        var fullname = $("#fullname").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var confirm_password = $("#confirm_password").val();
        var date = $("#birthdate").val();

        if (password !== confirm_password) {
            $("#passwordError").text("Passwords do not match");
            return;
        } else {
            window.location.href = "login.html";
        }
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/models/register.php",
            data: {
                submit: true,
                fullname: fullname,
                email: email,
                password: password,
                confirm_password: confirm_password,
                date: date
            },
            success: function(response) {
                console.log(response);
            }
        });
    });
});




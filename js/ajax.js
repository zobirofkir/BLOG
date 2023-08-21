$(document).ready(function() {
    // Function to get the user's full name from the session
    function getFullnameSession() {
        return sessionStorage.getItem("fullname");
    }

    $("#registerButton").click(function() {
        var submitButton = $("#registerButton");
        submitButton.prop("disabled", true);
        submitButton.html("Wait ...");

        var fullname = $("#fullname").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var confirm_password = $("#confirm_password").val();
        var date = $("#birthdate").val();

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

                if (response === "This user has been registered and an email has been sent.") {
                    // Set the user session in JavaScript
                    sessionStorage.setItem("fullname", fullname);
                    // Redirect to the login page
                    window.location.href = "login.html";
                } else if (response === "This user already exists in the database!") {
                    alert("This user already exists in the database!");
                } else if (response === "You are registered, but you didn't use a valid email address!") {
                    alert("You are registered, but you didn't use a valid email address!");
                } else if (password !== confirm_password) {
                    $("#passwordError").text("Passwords do not match");
                }
            },
            complete: function() {
                submitButton.prop("disabled", false);
                submitButton.html("Register");
            }
        });
    });

    // Retrieve and set the fullname from the session
    var fullnameSession = getFullnameSession();
    if (fullnameSession) {
        $("#userName").text(fullnameSession);
    } else {
        $("#userName").text("world");
    }
});

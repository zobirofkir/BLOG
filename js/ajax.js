$(document).ready(function() {
    $("#registerButton").click(function() {
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
                if (response === "This user has been registered.") {
                    // Set the user cookie in JavaScript
                    var userCookieValue = fullname;
                    var cookieExpiry = new Date();
                    cookieExpiry.setTime(cookieExpiry.getTime() + (30 * 24 * 60 * 60 * 1000)); // Cookie expires in 30 days
                    document.cookie = "user_cookie=" + userCookieValue + ";expires=" + cookieExpiry.toUTCString() + ";path=/";
                    console.log("User cookie has been set.");
                    window.location.href = "login.html";
                }
                if (password !== confirm_password) {
                    $("#passwordError").text("Passwords do not match");
                    return;
                }if (response === "This user already exists in the database!"){
                    alert("This user already exists in the database!");
                }     
            }
            
        });
    });
});

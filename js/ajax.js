$(document).ready(function() {
    function getFullnameCookie() {
        var cookieName = "user_cookie=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var cookieArray = decodedCookie.split(';');
        for (var i = 0; i < cookieArray.length; i++) {
            var cookie = cookieArray[i];
            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(cookieName) === 0) {
                return cookie.substring(cookieName.length, cookie.length);
            }
        }
        return "";
    }

    $("#registerButton").click(function() {
        var submitButton = $("#registerButton");
        submitButton.prop("disabled", true);
        submitButton.html("Please wait, we are redirecting you to the login page...");

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
                    // Set the user cookie in JavaScript
                    var userCookieValue = fullname;
                    var cookieExpiry = new Date();
                    cookieExpiry.setFullYear(cookieExpiry.getFullYear() + 1); // Adding 1 year to the current year
                    document.cookie = "user_cookie=" + userCookieValue + ";expires=" + cookieExpiry.toUTCString() + ";path=/";
                    console.log("User cookie has been set.");

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

    // Retrieve and set the fullname from the cookie
    var fullnameCookie = getFullnameCookie();
    if (fullnameCookie) {
        $("#userName").text(fullnameCookie);
    } else {
        $("#userName").text("world"); // Corrected the element selector and removed unnecessary else if condition
    }
});

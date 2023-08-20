$(document).ready(function() {
    // Check user's session status before accessing the route
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/models/sessionCheck.php",
        success: function(response) {
            if (response.authenticated || document.cookie.indexOf("user_cookie") !== -1) {
                // User is authenticated via session or cookie, allow access to the route
                $("#registerButton").click(function() {
                    var email = $("#email").val();
                    var password = $("#password").val();
                    
                    // Rest of your registration logic here
                });
            } else {
                // User is not authenticated, prevent access
                alert("You are not logged in. Please log in to access this route.");
                window.location.href = "index.html"; // Redirect the user to login page
            }
        },
        error: function(xhr, status, error) {
            console.log("Error:", error);
        }
    });
});

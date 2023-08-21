$(document).ready(function() {
    // Check user's session status before accessing the route
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/models/sessionCheck.php",
        dataType: "json", // Specify that the response should be treated as JSON
        success: function(response) {
            var fullnameSession = sessionStorage.getItem("fullname");
            
            if (response.authenticated || fullnameSession) {
                // User is authenticated via session or cookie, allow access to the route
                $("#registerButton").click(function() {
                    var fullname = $("#userName").val();
                    
                    // Rest of your registration logic here
                });
            } else {
                // User is not authenticated, prevent access
                alert("You are not logged in. Please log in to access this route.");
                window.location.href = "index.html"; // Redirect the user to the login page
            }
        },
        error: function(xhr, status, error) {
            console.log("Error:", error);
        }
    });
});

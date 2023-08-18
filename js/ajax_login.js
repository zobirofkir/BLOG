$(document).ready(function() {
    $("#registerButton").click(function() {
        var email = $("#email").val();
        var password = $("#password").val();

        $.ajax({
            type: "POST",
            url: "http://localhost:3000/models/login.php",
            data: {
                login: true,
                email: email,
                password: password,
            },
            success: function(response) {
                if (response === "ok") {
                    window.location.href = "blog.html";
                } else {
                    alert("Login failed");
                }
            },
            error: function(xhr, status, error) {
                colnsoe.log("Error:", error);
            }
        });
    });
});


// $(document).ready(function() {
//     // Check if user is logged in using AJAX
//     $.ajax({
//         url: 'http://localhost:3000/models/login.php', // Update to the correct URL
//         type: 'GET',
//         success: function(response) {
//             if (response !== 'loggedin') {
//                 // User is not logged in, redirect to login page
//                 window.location.href = 'login.html'; // Update to your login page
//             }
//         },
//         error: function(xhr, status, error) {
//             console.log("Error:", error); // Corrected typo: "colnsoe" to "console"
//         }
//     });
// });

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

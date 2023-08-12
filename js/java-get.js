$(document).ready(function () {
    $.ajax({
        url: "http://localhost:3000/models/get-users-data.php", // Replace with the actual path to your PHP script
        method: "GET",
        dataType: "json",
        success: function (data) {
            $("#userTable").html(""); // Clear previous data

            // Loop through the fetched users and display them in a table
            $.each(data, function (index, user) {
                $("#userTable").append("<tr><td>" + user.fullname + "</td><td>" + user.email + "</td></tr>");
            });
        },
        error: function (xhr, status, error) {
            console.error(error);
        }
    });
});

$(document).ready(function() {
    $.ajax({
        method: "GET",
        url: "http://localhost:3000/models/get-comment.php", // Replace with the correct path
        success: function(response) {
            var comments = JSON.parse(response);
            var commentList = $("#commentList");

            comments.forEach(function(commentData) {
                var comment = commentData.comment;
                var li = $("<li>").text(comment);
                commentList.append(li);
            });
        },
        error: function() {
            alert("Error fetching comments.");
        }
    });
});

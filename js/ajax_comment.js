$(document).ready(function(){
    $("#send_comment").click(function(){
        var comment = $("#comment").val();
        var name = $("#name").val();
        var email = $("#email").val();
        var website = $("#website").val();
         
        $.ajax({
            method: "POST",
            url: "http://localhost:3000/models/post-comment.php",
            data: {
                send_comment: true,
                comment: comment,
                name: name,
                email: email,
                website: website,
            },
            success: function(response){
                console.log(response);
                if (response === "There was an error submitting your comment.") {
                    alert("There was an error submitting your comment.");
                } else {
                    window.location.href ="single-blog.html";
                }
            }
        });
    });
});

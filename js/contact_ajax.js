$(document).ready(function(){
    $("#contactForm").submit(function(event){
        event.preventDefault(); // Prevent the default form submission

        var message = $("#message").val();
        var name = $("#name").val();
        var email = $("#email").val();
        var subject = $("#subject").val();

        $.ajax({
            method: "POST",
            url: "http://localhost:3000/models/contact.php",
            data: {
                contact: true,
                message: message,
                name: name,
                email: email,
                subject: subject
            },
            success: function(response){
                console.log(response);
                if (response === "success"){
                    alert("Message sent successfully!");
                } else {
                    alert("An error occurred while sending the message.");
                }
            },
            error: function(xhr, status, error) {
                console.error(error);
                alert("An error occurred while sending the message.");
            }
        });
    });
});

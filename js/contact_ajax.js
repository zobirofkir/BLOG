$(document).ready(function(){
    $("#contactForm").submit(function(event){
        event.preventDefault();

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
                if (response === "We call you soon") {
                    alert("We call you soon");
                } 
            },
        });
    });
});

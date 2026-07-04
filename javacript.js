
const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const params = {

        name:document.getElementById("name").value,

        email:document.getElementById("email").value,

        subject:document.getElementById("subject").value,

        message:document.getElementById("message").value

    };

    emailjs.send(

        "service_vu6brrs",

        "template_26wqoen",

        params

    )

    .then(function(){

        alert("Message Sent Successfully!");

        form.reset();

    })

    .catch(function(error){

        alert("Message Failed!");

        console.log(error);

    });

});
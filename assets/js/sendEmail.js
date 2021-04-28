function sendMail(contactForm) {
    emailjs.send("drivingschool", "drivingschool", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response); //Check log to make sure email is sent
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    document.getElementById("contact-form").reset();
    return false;  // Block from loading a new page
}
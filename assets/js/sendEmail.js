function sendMail(contactForm) {
    emailjs.send("drivingschool", "drivingschool", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response); //Check log to make sure email is sent
            let targetDiv = document.getElementById("formFeedback");
            let successMessage = "Your message has been sent"; //Let user know message is sent
            targetDiv.className = "alert-success d-flex align-items-center mb-3 p-3";
            contactForm.name.value = "";
            contactForm.emailaddress.value = "";
            contactForm.message.value = "";
            targetDiv.innerHTML = successMessage;
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    document.getElementById("contact-form").reset(); // Clear text from form after submission
    return false;  // Block from loading a new page
}
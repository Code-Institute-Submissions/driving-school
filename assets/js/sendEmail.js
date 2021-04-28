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
            let successMessage = "Your message has been sent";
            targetDiv.className = "alert-success";
            contactForm.name.value = "";
            contactForm.emailaddress.value = "";
            contactForm.message.value = "";
            targetDiv.innerHTML = successMessage;
            setTimeout(() => {
                targetDiv.innerHTML = "";
            }, 5000);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    document.getElementById("contact-form").reset(); // Clear text from form after submission
    return false;  // Block from loading a new page
}
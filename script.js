// Initialize EmailJS with your user ID
(function () {
  emailjs.init("NaAd_HlezyCU8kxV9");
})();

// Function to send email using EmailJS
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Send the email using the form data
    console.log(this);
    emailjs
      .sendForm("service_ib8z3rb", "template_9jydnoa", this)
      .then(
        function () {
          alert("Message Sent Successfully!");
        },
        function (error) {
          alert("Failed to send the message: " + JSON.stringify(error));
        }
      );
  });

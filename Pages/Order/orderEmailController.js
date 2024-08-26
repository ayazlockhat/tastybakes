document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".orderForm").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Collect form data
      const formData = new FormData(this);
  
      // Prepare the data for EmailJS
      const templateParams = {
        fullName: formData.get("fullName"),
        email: formData.get("email"),
        occasion: formData.get("occasion"),
        servings: formData.get("servings"),
        dueDate: formData.get("dueDate"),
        flavour: formData.get("flavour"),
        budget: formData.get("budget"),
        message: formData.get("message"),
        description: formData.get("description"),
        comments: formData.get("comments"),
        // File handling is not included here
      };
  
      // Send the email
      emailjs.send('service_s2ekc4s', 'template_uhxb6uj', templateParams)
        .then(function(response) {
          console.log('Success:', response);
          // Show a success message
          alert('Your inquiry has been successfully sent! Thank you for reaching out to us.');
          // Optionally, clear the form or redirect the user
          document.querySelector(".orderForm").reset();
        }, function(error) {
          console.log('Error:', error);
          // Show an error message
          alert('There was an error sending your inquiry. Please try again later.');
        });
    });
  });
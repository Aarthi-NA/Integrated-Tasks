
// Function to show a message when the submit button is clicked
function handleSubmit(event) {
  event.preventDefault(); // Prevents the default form submission behavior

  // Get the input values
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const mobile = document.getElementById('mobile').value;
  const address = document.getElementById('address').value;

  // Display the message
  const message = `Thank you, ${fullName}! Your information has been submitted.\nEmail: ${email}\nMobile: ${mobile}\nAddress: ${address}`;
  alert(message);
}

// Add an event listener to the form's submit button
const submitButton = document.getElementById('submitBtn');
submitButton.addEventListener('click', handleSubmit);

  // Open social media links in a new tab
  const socialIcons = document.querySelectorAll(".social-icon a");

  socialIcons.forEach(function (icon) {
    icon.addEventListener("click", function (event) {
      event.preventDefault();
      const socialUrl = this.getAttribute("href");
      window.open(socialUrl, "_blank");
    });
  });


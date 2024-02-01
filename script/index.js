document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    openPopup();
  }, 5000);

  var popupForm = document.querySelector('.popup form');
  if (popupForm) {
    popupForm.addEventListener('submit', function (event) {
      event.preventDefault();
      submitForm();
    });
  }
});

function openPopup() {
  var popup = document.querySelector('.popup');
  var overlay = document.querySelector('.overlay');
  popup.style.display = 'block';
  overlay.style.display = 'block';
}

function closePopup() {
  var popup = document.querySelector('.popup');
  var overlay = document.querySelector('.overlay');
  popup.style.display = 'none';
  overlay.style.display = 'none';
}

function submitForm() {
  var parms = {
    name: document.getElementById('name').value,
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  };

  alert('Form sent!');
  setTimeout(function () {
    closePopup(); 
  }, 1); 

  emailjs.send("service_b3167o6", "template_7wqdfjy", parms)
    .then(function(response) {
      alert("Email Sent!");
      console.log("Email sent successfully:", response);
    })
    .catch(function(error) {
      console.error("Error sending email:", error);
    });
}

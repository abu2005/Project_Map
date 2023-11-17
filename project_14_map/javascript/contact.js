document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitBtn = document.querySelector('.contact-btn');
    const successMessage = document.getElementById('success-message');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
  
    function validateName() {
      const nameValue = nameInput.value.trim();
      if (nameValue === '') {
        nameError.textContent = 'Name is required';
        return false;
      } else {
        nameError.textContent = '';
        return true;
      }
    }
  
    function validateEmail() {
      const emailValue = emailInput.value.trim();
      if (emailValue === '') {
        emailError.textContent = 'Email is required';
        return false;
      } else if (!emailInput.checkValidity()) {
        emailError.textContent = 'Please enter a valid email address';
        return false;
      } else {
        emailError.textContent = '';
        return true;
      }
    }
  
    function validateForm() {
      const isValidName = validateName();
      const isValidEmail = validateEmail();
      const isValidMessage = messageInput.value.trim() !== '';
  
      return isValidName && isValidEmail && isValidMessage;
    }
  
    function handleFormSubmission(event) {
      event.preventDefault();
      if (validateForm()) {
        successMessage.style.display = 'block';
        submitBtn.disabled = true;
        form.reset();
  
        setTimeout(function() {
          successMessage.style.display = 'none';
          submitBtn.disabled = false;
        }, 3000); // 3000 milliseconds (3 seconds) timeout
      }
    }
  
    function updateSubmitButton() {
      submitBtn.disabled = !validateForm();
    }
  
    form.addEventListener('submit', handleFormSubmission);
    nameInput.addEventListener('input', function () {
      validateName();
      updateSubmitButton();
    });
    emailInput.addEventListener('input', function () {
      validateEmail();
      updateSubmitButton();
    });
    messageInput.addEventListener('input', updateSubmitButton);
});


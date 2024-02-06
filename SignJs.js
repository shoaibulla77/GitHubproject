function validateForm() {
    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value;

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) {
        alert('Please enter a valid email address.');
        emailInput.focus();
        return false;
    }

    return true;
}

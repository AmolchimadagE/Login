document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error');
  
    // Simple email and password validation
    if (!validateEmail(email)) {
      errorMessage.textContent = 'Please enter a valid email address.';
      return;
    }
    
    if (password.length < 6) {
      errorMessage.textContent = 'Password must be at least 6 characters long.';
      return;
    }
  
    // Simulate login success
    errorMessage.textContent = '';
    alert('Login successful!');
  });
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
  
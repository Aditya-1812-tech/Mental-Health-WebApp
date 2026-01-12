
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const messageElement = document.getElementById('formMessage');

            
            if (email === '' || password === '') {
                messageElement.textContent = 'Please fill in both email and password.';
            } else if (!email.includes('@')) {
                messageElement.textContent = 'Please enter a valid email address.';
            } else {
                messageElement.textContent = '';
                alert('Login data submitted! (Email: ' + email + ')'); 
                window.location.href = 'dashboard.html';
            }
        });
    
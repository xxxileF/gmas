const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if ( email === "admin@gmail.com" || password === "123") {
            window.location.href = 'vote.html';
        } else {
            alert('Login failed. Please check your email and your password.');
        }
    });
}
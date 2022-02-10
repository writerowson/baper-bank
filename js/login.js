document.getElementById("login-submit").addEventListener('click', function () {
    // get user email 
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value
    // get password
    const passwordField = document.getElementById("user-password");
    const userpassword = passwordField.value
    // check email and password
    if (userEmail == "sontan@gmail.com" && userpassword
        == 'secret') {
        window.location.href = 'banking.html'
    }
})

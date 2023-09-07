document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const loginMessage = document.getElementById("login-message");

    let loginAttempts = 3;
    let loggedIn = false;

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "usuario" && password === "contraseña") {
            loggedIn = true;

            alert("Inicio de sesión exitoso");
            window.location.href = "menu.html";
        } else {
            loginAttempts--;
            loginMessage.textContent = `Credenciales incorrectas. Intentos restantes: ${loginAttempts}`;
            loginMessage.classList.remove("hidden");

            if (loginAttempts === 0) {
                loginForm.style.display = "none";
                loginMessage.textContent = "Has agotado tus intentos de inicio de sesión.";
            }
        }
    });

    function registrarproveedor (){

    }
});
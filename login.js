document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const isRegistering = document.getElementById("submitButton").textContent === "Cadastrar";
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const rua = document.getElementById("rua").value;
    const cidade = document.getElementById("cidade").value;
    const estado = document.getElementById("estado").value;

    if (isRegistering) {
        if (!email || !validateEmail(email)) {
            document.getElementById("errorMessage").textContent = "Por favor, insira um e-mail válido.";
            return;
        }
        if (password !== confirmPassword) {
            document.getElementById("errorMessage").textContent = "As senhas não coincidem.";
            return;
        }
        if (localStorage.getItem(username)) {
            document.getElementById("errorMessage").textContent = "Usuário já cadastrado. Faça login.";
            return;
        }

        localStorage.setItem(username, JSON.stringify({ password, email, endereco: { rua, cidade, estado } }));
        document.getElementById("errorMessage").textContent = "Cadastro realizado com sucesso! Faça login.";

        clearFormFields();
        toggleForm();
    } else {
        const storedData = JSON.parse(localStorage.getItem(username));
        if (storedData && storedData.password === password) {
            localStorage.setItem("isLoggedIn", "true");
            window.location.href = "supermercado.html";
        } else {
            document.getElementById("errorMessage").textContent = "Usuário ou senha incorretos.";
        }
    }
});

document.getElementById("toggleFormLink").addEventListener("click", toggleForm);

function toggleForm() {
    const isRegistering = document.getElementById("submitButton").textContent === "Entrar";
    document.getElementById("formTitle").textContent = isRegistering ? "Cadastrar" : "Bem-vindo";
    document.getElementById("formDescription").textContent = isRegistering ? "Crie uma nova conta" : "Faça login para acessar o supermercado";
    document.getElementById("submitButton").textContent = isRegistering ? "Cadastrar" : "Entrar";
    document.getElementById("toggleFormText").innerHTML = isRegistering 
        ? "Já tem uma conta? <span id='toggleFormLink' style='color: #007dc3; cursor: pointer;'>Faça login</span>" 
        : "Ainda não tem uma conta? <span id='toggleFormLink' style='color: #007dc3; cursor: pointer;'>Cadastre-se</span>";
    document.getElementById("errorMessage").textContent = "";

    document.getElementById("email").style.display = isRegistering ? "block" : "none";
    document.getElementById("confirmPasswordContainer").style.display = isRegistering ? "block" : "none";
    document.getElementById("addressFields").style.display = isRegistering ? "block" : "none";

    document.getElementById("toggleFormLink").addEventListener("click", toggleForm);
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function togglePasswordVisibility(id) {
    const passwordField = document.getElementById(id);
    passwordField.type = passwordField.type === "password" ? "text" : "password";
}

function clearFormFields() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("email").value = "";
    document.getElementById("confirmPassword").value = "";
    document.getElementById("rua").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("estado").value = "";
}

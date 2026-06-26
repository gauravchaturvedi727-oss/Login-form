const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("button");
const container = document.querySelector(".container");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
        togglePassword.innerHTML =
            '<i class="fa-solid fa-eye-slash"></i>';
    } else {
        password.type = "password";
        togglePassword.innerHTML =
            '<i class="fa-solid fa-eye"></i>';
    }

});

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
        /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
    if (emailValue === "") {
        shake();
        alert("❌ Email is required.");
        email.focus();
        return;
    }

    if (!emailRegex.test(emailValue)) {
        shake();
        alert("❌ Please enter a valid Email.");
        email.focus();
        return;
    }
    if (passwordValue === "") {
        shake();
        alert("❌ Password is required.");
        password.focus();
        return;
    }

    if (!passwordRegex.test(passwordValue)) {
        shake();
        alert(
`Password must contain:
• Minimum 8 characters
• One Capital Letter
• One Number
• One Special Character`
        );
        password.focus();
        return;
    }
    button.innerHTML =
        '<i class="fa-solid fa-spinner fa-spin"></i> Logging In...';
    button.disabled = true;
    setTimeout(() => {
        button.innerHTML =
            '<i class="fa-solid fa-check"></i> Login Successful';
        button.style.background =
            "#16a34a";
        setTimeout(() => {
            alert("✅ Login Successful!");
            form.reset();
            password.type = "password";
            togglePassword.innerHTML =
                '<i class="fa-solid fa-eye"></i>';
            button.innerHTML = "Login";
            button.style.background =
                "linear-gradient(135deg,#2563eb,#1DB954)";
            button.disabled = false;
        }, 1000);

    }, 1500);

});

function shake() {
    container.classList.add("shake");
    setTimeout(() => {
        container.classList.remove("shake");
    }, 400);
}
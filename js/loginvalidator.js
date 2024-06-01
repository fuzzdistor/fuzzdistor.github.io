const email = {
    field: document.getElementById('email'),
    label: document.getElementById('emailError'),
    error_text: "El correo electrónico es obligatorio"
}

const password = {
    field: document.getElementById('contrasena'),
    label: document.getElementById('contrasenaError'),
    error_text: "La contraseña es obligatoria"
}

const form = document.getElementById('form');

function invalidateField(element) {
    element.field.classList.add("errorNotif")
    element.label.innerText = element.error_text;
}

form.addEventListener('submit', (e) => {
    email.label.innerText = "";
    password.label.innerText = "";
    email.field.classList.remove("errorNotif");
    password.field.classList.remove("errorNotif");

    if (email.field.value === '' || email.field.value == null) {
        e.preventDefault();
        invalidateField(email);
    }
    if (password.field.value === '' || password.field.value == null) {
        e.preventDefault();
        invalidateField(password);
    }

});

email.field.addEventListener('keyup', (e) => {
    if (e.key === "Enter") {
        if (email.field.value === '' || email.field.value == null) {
            invalidateField(email)
        } else {
            email.label.innerText = "";
        }
    }
});

password.field.addEventListener('keyup', (e) => {
    if (e.key === "Enter") {
        if (password.field.value === '' || password.field.value == null) {
            invalidateField(password)
        } else {
            password.label.innerText = "";
        }
    }
});
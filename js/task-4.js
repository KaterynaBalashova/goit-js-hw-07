const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const email = event.target.elements.email;
    const password = event.target.elements.password;

    if (email.value === "" || password.value === "") {
        alert('All form fields must be filled in');
        return;
    };

    const userInput = {
        email: email.value.trim(),
        password: password.value.trim(),
    };
    console.log(userInput);
    
    form.reset();
}
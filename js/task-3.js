const input = document.getElementById("name-input");
const output = document.getElementById("name-output")

input.addEventListener("input", handleInput);

function handleInput(event) {
    const trimmedValue = event.currentTarget.value.trim();

    if (trimmedValue === "") {
        output.textContent = "Anonymous";
    } else {
        output.textContent = trimmedValue;
    };
};

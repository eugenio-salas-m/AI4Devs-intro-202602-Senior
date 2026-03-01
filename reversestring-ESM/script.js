document.addEventListener("DOMContentLoaded", function () {

    const inputText = document.getElementById("inputText");
    const btnReverse = document.getElementById("btnReverse");
    const resultLabel = document.getElementById("resultLabel");
    const btnCopy = document.getElementById("btnCopy");

    // Mostrar / ocultar botón según longitud del texto trim
    inputText.addEventListener("input", function () {
        const trimmedText = inputText.value.trim();

        // Si está vacío → limpiar label
        if (trimmedText === "") {
            resultLabel.textContent = "";
            return;
        }

        if (trimmedText.length > 3) {
            btnReverse.style.display = "inline-block";
            const reversed = trimmedText.split("").reverse().join("");
            resultLabel.textContent = reversed;
        } else {
            btnReverse.style.display = "none";
            resultLabel.textContent = "";
        }
    });

    // Reverse button
    btnReverse.addEventListener("click", function () {
        const text = inputText.value.trim();
        const reversed = text.split("").reverse().join("");
        resultLabel.textContent = reversed;
    });

    // Copy button
    btnCopy.addEventListener("click", function () {
        const textToCopy = resultLabel.textContent;

        if (textToCopy) {
            navigator.clipboard.writeText(textToCopy)
                .then(() => alert("Text copied!"))
                .catch(err => alert("Error copying text"));
        }
    });

});
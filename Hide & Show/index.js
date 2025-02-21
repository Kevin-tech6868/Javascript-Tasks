document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".mybutton");
    const image = document.querySelector(".myimg");

    button.addEventListener("click", function() {
        if (image.style.display === "none") {
            image.style.display = "block";
            button.textContent = "Hide";
        } else {
            image.style.display = "none";
            button.textContent = "Show";
        }
    });
});
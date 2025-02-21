let currentIndex = 0;
const images = document.querySelectorAll(".col-md-4 img");

function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = (i === index) ? "block" : "none";
    });
}

function prevImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    showImage(currentIndex);
}

// Attach event listeners to buttons
document.querySelector(".btn-primary:nth-child(1)").addEventListener("click", prevImage);
document.querySelector(".btn-primary:nth-child(2)").addEventListener("click", nextImage);

// Initialize - Show First Image Only
showImage(currentIndex);

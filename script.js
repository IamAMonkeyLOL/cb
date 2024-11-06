// Function to toggle between sections
function showContent(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');
    const activeSection = document.getElementById(sectionId);
    if (activeSection) activeSection.style.display = 'block';
}

// Image Carousel functionality
const images = document.querySelectorAll('.image');
let currentIndex = 0;

// Show the first image
function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) img.classList.add('active');
    });
}

// Go to the next image
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

// Event listener for "Next Image" button
document.getElementById('nextBtn').addEventListener('click', nextImage);

// Auto-start the first image
showImage(currentIndex);

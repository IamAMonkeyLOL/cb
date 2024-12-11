// Function to toggle between sections
function showContent(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => (section.style.display = 'none')); // Hide all sections
    const activeSection = document.getElementById(sectionId);
    if (activeSection) activeSection.style.display = 'block'; // Show the selected section
}

// Image Carousel Functionality
const images = document.querySelectorAll('.image');
let currentIndex = 0;

// Function to show the current image
function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) img.classList.add('active'); // Add 'active' class to the current image
    });
}

// Function to go to the next image
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the start after the last image
    showImage(currentIndex);
}

// Initialize the carousel
function initializeCarousel() {
    if (images.length > 0) {
        showImage(currentIndex); // Show the first image
        const nextButton = document.getElementById('nextBtn');
        nextButton.addEventListener('click', nextImage); // Set up the button to switch images
    }
}

// DOMContentLoaded ensures scripts run after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeCarousel(); // Initialize the carousel
});

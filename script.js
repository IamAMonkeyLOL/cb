function showContent(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');
  
    // Show the selected section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) activeSection.style.display = 'block';
  }
  const images = document.querySelectorAll('.image');
let currentIndex = 0;

// Show the first image initially
function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active'); // Add active class to the current image
        }
    });
}

// Function to go to the next image
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
    showImage(currentIndex);
}

// Listen for the button click
document.getElementById('nextBtn').addEventListener('click', nextImage);

// Initial display
showImage(currentIndex);

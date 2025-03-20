// Elements
const gifContainer = document.getElementById('gif-container');
const imageContainer = document.getElementById('image-container');
const eventImage = document.getElementById('event-image');

// Array of image paths for each day of the week
const dayImages = [
  'Infinte Agenda_test_V2_Page_1.jpg', // Sunday
  'Infinte Agenda_test_V2_Page_2.jpg', // Monday
  'Infinte Agenda_test_V2_Page_3.jpg', // Tuesday
  'Infinte Agenda_test_V2_Page_4.jpg', // Wednesday
  'Infinte Agenda_test_V2_Page_5.jpg', // Thursday
  'Infinte Agenda_test_V2_Page_1.jpg', // Friday
  'Infinte Agenda_test_V2_Page_2.jpg', // Saturday
];

// Index to track the current image
let currentImageIndex = 0;

// Function to switch to the next image
function switchImage() {
  // Update the image source
  eventImage.src = dayImages[currentImageIndex];

  // Hide GIF and show event image
  gifContainer.style.opacity = '0';
  gifContainer.style.visibility = 'hidden';
  imageContainer.style.opacity = '1';
  imageContainer.style.visibility = 'visible';

  // Increment the index for the next image
  currentImageIndex = (currentImageIndex + 1) % dayImages.length; // Loop back to 0 after Saturday
}

// Show GIF instantly
window.onload = () => {
  gifContainer.classList.add('show');

  // After 3 seconds, switch to the first event image
  setTimeout(() => {
    switchImage(); // Show the first image
  }, 3000); // 3000ms = 3 seconds

  // Switch images every 5 minutes (300,000 milliseconds) for testing
  setInterval(switchImage, 7000); // 7000ms = 5 minutes
};
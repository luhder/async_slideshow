const randomImages = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    // Add more image URLs here
  ];
  
  const slideshowDiv = document.getElementById('slideshow');
  let currentImageIndex = 0;
  
  function showNextImage() {
    slideshowDiv.innerHTML = `<img src="${randomImages[currentImageIndex]}" alt="Random Movie Image">`;
  
    currentImageIndex++;
    if (currentImageIndex >= randomImages.length) {
      currentImageIndex = 0;
    }
  }
  
  showNextImage(); // Show the first image immediately
  setInterval(showNextImage, 2000); // Change image every 2 seconds
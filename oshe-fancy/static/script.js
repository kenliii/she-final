// Example of simple JavaScript for a manual slideshow - you would need to add more HTML and CSS to make this functional.
document.addEventListener('DOMContentLoaded', function () {
    let slides = document.querySelectorAll('#slideshow-section .slide');
    let currentSlide = 0;
    
    function nextSlide() {
        slides[currentSlide].style.display = 'none';
        currentSlide = (currentSlide+1)%slides.length;
        slides[currentSlide].style.display = 'block';
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds
});

document.addEventListener('DOMContentLoaded', function () {
    // Define your images
    const cityImages = {
        seattle: 'path/to/seattle-image.jpg',
        bayArea: 'path/to/bay-area-image.jpg',
        newYork: 'path/to/new-york-image.jpg',
        oregon: 'path/to/oregon-image.jpg',
        vancouver: 'path/to/vancouver-image.jpg'
    };

    // Function to change the background image
    function changeBackgroundImage(city) {
        const container = document.querySelector('.background-image-container');
        container.style.backgroundImage = `url('${cityImages[city]}')`;
    }

    // Get all the city list items
    const cityListItems = document.querySelectorAll('.locations-list li');

    // Attach mouseenter and mouseleave events to each city list item
    cityListItems.forEach(item => {
        const city = item.getAttribute('data-city');
        
        // When mouse enters the list item
        item.addEventListener('mouseenter', () => {
            changeBackgroundImage(city);
        });

        // Optionally, when mouse leaves the list item, revert to default background
        item.addEventListener('mouseleave', () => {
            changeBackgroundImage('default'); // Assuming you have a default image
        });
    });
});

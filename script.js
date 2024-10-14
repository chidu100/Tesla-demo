const slides = document.querySelectorAll('.carousel-item');
        const dots = document.querySelectorAll('.dot');
        let currentIndex = 0;

        // Function to show the selected slide
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active'); // Hide all slides
                dots[i].classList.remove('active'); // Remove active class from all dots
            });

            slides[index].classList.add('active'); // Show selected slide
            dots[index].classList.add('active'); // Highlight selected dot
            currentIndex = index; // Update current index
        }

        // Function to show the next slide
        function nextSlide() {
            const nextIndex = (currentIndex + 1) % slides.length; // Cycle through slides
            showSlide(nextIndex);
        }

        // Click event to change slide when clicking on the carousel
        document.getElementById('carousel').addEventListener('click', nextSlide);

        // Optional: Automatically transition slides every 5 seconds
        setInterval(nextSlide, 5000); // Change every 5 seconds
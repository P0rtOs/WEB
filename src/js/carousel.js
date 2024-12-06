// Select the necessary elements
const carouselContent = document.querySelector(".carousel-content");
const indicators = document.querySelectorAll(".indicator");
const slides = document.querySelectorAll(".slide");

indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
        // Remove active class from all slides and indicators
        slides.forEach(slide => slide.classList.remove("active"));
        indicators.forEach(ind => ind.classList.remove("active"));
        
        // Add active class to the clicked indicator and corresponding slide
        indicators[index].classList.add("active");
        slides[index].classList.add("active");

        // Move the carousel content to show the selected slide
        
    });
});
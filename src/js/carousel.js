const carouselContent = document.querySelector(".carousel-content");
const indicators = document.querySelectorAll(".indicator");
const slides = document.querySelectorAll(".slide");

indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
        slides.forEach((slide) => slide.classList.remove("active"));
        indicators.forEach((ind) => ind.classList.remove("active"));

        indicators[index].classList.add("active");
        slides[index].classList.add("active");
    });
});

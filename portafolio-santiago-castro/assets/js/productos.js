document.addEventListener('DOMContentLoaded', () => {
    // Estado para cada carrusel
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        let currentSlide = 0;
        const slides = carousel.querySelectorAll('.carousel-item');
        const totalSlides = slides.length;

        // Mostrar la primera imagen por defecto
        slides[0].style.display = 'block';

        // Botones de navegación
        const prevButton = carousel.querySelector('.carousel-prev');
        const nextButton = carousel.querySelector('.carousel-next');

        // Función para mover el carrusel
        function moveCarousel(direction) {
            slides[currentSlide].style.display = 'none';
            currentSlide += direction;

            if (currentSlide >= totalSlides) {
                currentSlide = 0;
            }
            if (currentSlide < 0) {
                currentSlide = totalSlides - 1;
            }

            slides[currentSlide].style.display = 'block';
        }

        // Asignar eventos a los botones
        prevButton.addEventListener('click', () => moveCarousel(-1));
        nextButton.addEventListener('click', () => moveCarousel(1));
    });
});

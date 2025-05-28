document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar todos los botones "Leer más"
    const readMoreButtons = document.querySelectorAll('.read-more');

    // Añadir un evento de clic a cada botón
    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Obtener el contenedor de la historia completa usando el atributo aria-controls
            const fullStoryId = button.getAttribute('aria-controls');
            const fullStory = document.getElementById(fullStoryId);

            // Alternar la visibilidad de la historia completa
            if (fullStory.style.display === 'none') {
                fullStory.style.display = 'block';
                button.setAttribute('aria-expanded', 'true');
                button.textContent = 'Leer menos';
            } else {
                fullStory.style.display = 'none';
                button.setAttribute('aria-expanded', 'false');
                button.textContent = 'Leer más';
            }
        });
    });
});
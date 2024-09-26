document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('#carouselBd');
    const carouselItems = carousel.querySelectorAll('.carousel-item');
    let currentIndex = 0;
    const totalItems = carouselItems.length;

    // Fonction pour changer d'élément
    function changeSlide() {
        // Masquer l'élément actuel
        carouselItems[currentIndex].classList.remove('active');

        // Calculer l'index du prochain élément
        currentIndex = (currentIndex + 1) % totalItems;

        // Afficher le nouvel élément
        carouselItems[currentIndex].classList.add('active');
    }

    // Changer d'image toutes les 3 secondes
    setInterval(changeSlide, 5000);
});

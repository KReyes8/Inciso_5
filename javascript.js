/*
Karen Reyes Ramirez
Universidad Autónoma de Durango
Examen */
let currentIndex = 0; // Menciona la imagen actual //

function showImage(index) {
    const images = document.querySelectorAll('.carousel-images img');
    const totalImages = images.length;
    if (index >= totalImages) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalImages - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function nextImage() { //Para pasar a la siguiente o anterior imagen con las flechas //
    showImage(currentIndex + 1);
}

function prevImage() {
        showImage(currentIndex - 1);
    }

document.addEventListener('keydown', (event) => { //Con este codigo podemos avanzar o retroceder la imagen con la flecha derecha o izq del tecldo//
    if (event.key === 'ArrowRight') {
        nextImage(); //nextImage se usa para avanzar// //prevImage es para retroceder//
    } else if (event.key === 'ArrowLeft') {
        prevImage();
    } 
});

setInterval(() => {
    showImage(currentIndex + 1); 
}, 5000);
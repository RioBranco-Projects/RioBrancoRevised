const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselImages = document.querySelector('.carousel-images');

let index = 0;

function showImage(index) {
    const totalImages = carouselImages.children.length;
    const offset = -index * 1920; // 800px é a largura das imagens
    carouselImages.style.transform = `translateX(${offset}px)`;
}

prevButton.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : carouselImages.children.length - 1;
    showImage(index);
});

nextButton.addEventListener('click', () => {
    index = (index < carouselImages.children.length - 1) ? index + 1 : 0;
    showImage(index);
});

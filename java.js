var cerrar = 0;

document.querySelectorAll('.image-container img').forEach(image => {
    image.onclick = () => {
        const text = image.getAttribute('data-text');
        document.querySelector('.popup-text').style.display = 'block';

        document.querySelector('.popup-text p').innerText = text;
        setTimeout(function () {
            cerrar = 1;
        }, 500);
    }
});

const popUp = document.querySelector('.popup-text');

document.addEventListener('click', (event) => {
    if (!popUp.contains(event.target) && cerrar === 1) {
        popUp.style.display = 'none';
        cerrar = 0;
    }
});

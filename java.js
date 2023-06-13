document.querySelectorAll('.image-container img').forEach(image => {
    image.onclick = (event) => {
        event.stopPropagation();
        const text = image.getAttribute('data-text');
        const popUp = document.querySelector('.popup-text');
        popUp.style.display = 'block';
        popUp.querySelector('p').innerText = text;
    };
});

document.querySelector('.popup-text').onclick = (event) => {
    event.stopPropagation();
};

document.addEventListener('click', (event) => {
    const popUp = document.querySelector('.popup-text');
    if (popUp.style.display === 'block' && !popUp.contains(event.target)) {
        popUp.style.display = 'none';
    }
});

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

function closePopup() {
    const popUp = document.querySelector('.popup-text');
    popUp.style.animationName = 'slideout';
    popUp.style.animationDuration = '0.8s';
    popUp.style.animationTimingFunction = 'ease-in';
    popUp.style.animationFillMode = 'forwards';

    setTimeout(() => {
        popUp.style.display = 'none';
        popUp.style.animationTimingFunction = 'ease-out';
        popUp.style.animationName = '';
    }, 800);
}

const siblingElement = document.querySelector('.popup-text p');
const element = document.querySelector('.popup-text .close');


const siblingHeight = siblingElement.offsetHeight;


element.style.height = siblingHeight + 'px';

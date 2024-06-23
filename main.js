// RANDOM ROTATION

const paper = document.querySelectorAll('.card');

function randonAngle(item) {
    item.forEach(el => {
        let rAngle = (Math.random() * 5) - 2.5;
        el.style.transform = `rotate(${rAngle}deg)`;
    });
}

randonAngle(paper);

function getRandomAngle() {
    return Math.floor(Math.random() * 16) - 8;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomPosition(width, height) {
    return [
        getRandomInt(width),
        getRandomInt(height)
    ]
}

function placeCardsRandomly() {
    const screenWidth = window.innerWidth
    const screentHeight = window.innerHeight

    paper.forEach((item) => {
        const position = getRandomPosition(screenWidth - item.clientWidth, screentHeight - item.clientHeight);
        item.style.position = 'absolute';
        item.style.left = position[0] + 'px';
        item.style.top = position[1] + 'px';
    })


    const logo = document.querySelector('.logo');

    const position = getRandomPosition(screenWidth - logo.clientWidth, screentHeight - logo.clientHeight);
    logo.style.position = 'absolute';
    logo.style.left = position[0] + 'px';
    logo.style.top = position[1] + 'px';



}

placeCardsRandomly()

// DRAGGABLE
$(document).ready(function () {
    $(".card").draggable({
        stack: ".card"
    });
    $(".logo").draggable({
        stack: ".card"
    });
})
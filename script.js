// Crear estrellas de fondo
function createStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = 80;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (2 + Math.random() * 2) + 's';
        starsContainer.appendChild(star);
    }
}

// Crear corazones flotantes
function createHeart() {
    const heartsContainer = document.getElementById('hearts');
    const heart = document.createElement('div');
    heart.classList.add('heart-particle');

    const heartEmojis = ['💛', '💖', '💕', '💗', '🧡', '💝'];
    heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (16 + Math.random() * 20) + 'px';
    heart.style.animationDuration = (6 + Math.random() * 6) + 's';

    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 12000);
}

// Crear flores cayendo
function createFlower() {
    const flowersContainer = document.getElementById('flowers');
    const flower = document.createElement('div');
    flower.classList.add('flower-particle');

    const flowerEmojis = ['🌸', '🌷', '🌹', '🌻', '🌼'];
    flower.textContent = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];

    flower.style.left = Math.random() * 100 + '%';
    flower.style.fontSize = (18 + Math.random() * 16) + 'px';
    flower.style.animationDuration = (8 + Math.random() * 6) + 's';

    flowersContainer.appendChild(flower);
    setTimeout(() => flower.remove(), 14000);
}

// Efecto 3D Parallax con el ratón
const scene = document.getElementById('scene');
const bears = document.getElementById('bears');
const letter = document.getElementById('letter');

document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2; // -1 a 1
    const y = (e.clientY / window.innerHeight - 0.5) * 2; // -1 a 1

    // Inclinar la imagen en dirección contraria al ratón
    bears.style.transform = `rotateY(${x * 25}deg) rotateX(${-y * 15}deg)`;

    // Inclinar el corazón del mensaje
    letter.style.transform = `rotateY(${x * -15}deg) rotateX(${y * 10}deg)`;
});

// Restablecer transformación al salir
document.addEventListener('mouseleave', () => {
    bears.style.transform = 'rotateY(0deg) rotateX(0deg)';
    letter.style.transform = 'rotateY(0deg) rotateX(0deg)';
});

// Llamar a las funciones al cargar
window.addEventListener('DOMContentLoaded', () => {
    createStars();
    setInterval(createHeart, 600);
    setInterval(createFlower, 1200);

    for (let i = 0; i < 5; i++) {
        setTimeout(createHeart, i * 200);
        setTimeout(createFlower, i * 400);
    }
});

// Efecto al hacer click: explosión de corazones
document.addEventListener('click', (e) => {
    const heartBurst = document.createElement('div');
    heartBurst.style.position = 'fixed';
    heartBurst.style.left = e.clientX + 'px';
    heartBurst.style.top = e.clientY + 'px';
    heartBurst.style.pointerEvents = 'none';
    heartBurst.style.zIndex = '1000';
    heartBurst.style.fontSize = '30px';
    heartBurst.textContent = '💖';
    heartBurst.style.transition = 'all 1s ease-out';
    document.body.appendChild(heartBurst);

    requestAnimationFrame(() => {
        heartBurst.style.transform = `translate(${(Math.random() - 0.5) * 200}px, ${-100 - Math.random() * 100}px) scale(2)`;
        heartBurst.style.opacity = '0';
    });

    setTimeout(() => heartBurst.remove(), 1000);
});
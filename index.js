function createStars() {
    const numStars = 100;
    const container = document.querySelector(".stars-container");

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 5 + 5}s`;
        container.appendChild(star);
    }
}

createStars();

function moveStars() {
    const stars = document.querySelectorAll(".star");

    stars.forEach((star) => {
        star.style.animationName = "moveStar"; // Имя анимации
        star.style.animationIterationCount = "infinite"; // Сделать анимацию бесконечной
    });
}

moveStars();

function handleScroll() {
        const stars = document.querySelectorAll(".star");
        const scrollY = window.scrollY;
    
        stars.forEach((star) => {
            const initialTop = parseFloat(star.style.top);
            const newTop = initialTop - scrollY * 0.1;
            star.style.top = `${newTop}%`;
    
            if (newTop < -10) {
                star.style.top = `${Math.random() * 10 + 100}%`;
                star.style.left = `${Math.random() * 100}%`;
                star.style.animationDelay = `${Math.random() * 10}s`;
            }
        });
    }
    
    window.addEventListener("scroll", handleScroll);


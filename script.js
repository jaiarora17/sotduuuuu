document.addEventListener('DOMContentLoaded', () => {
    const teddy = document.querySelector('.teddy');
    const chocolate = document.querySelector('.chocolate');
    const shinchan = document.querySelector('.shinchan');

    function startAnimation() {
        teddy.style.animation = 'none';
        chocolate.style.animation = 'none';
        shinchan.style.animation = 'none';

        setTimeout(() => {
            teddy.style.animation = '';
            chocolate.style.animation = '';
            shinchan.style.animation = '';
        }, 10);
    }

    startAnimation();
    setInterval(startAnimation, 4000);
});

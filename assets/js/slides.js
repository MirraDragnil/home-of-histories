(function () {
    const slides = document.getElementById('slides');
    if (!slides || slides.children.length < 2) return;

    const interval = parseInt(slides.dataset.interval || '5500', 10);
    let current = 0;

    setInterval(function () {
        current = (current + 1) % slides.children.length;
        slides.style.transform = 'translateX(-' + current * 100 + '%)';
    }, interval);
})();

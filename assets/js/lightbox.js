(function () {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    const img = document.getElementById('lb-img');

    document.addEventListener('click', function (e) {
        const target = e.target.closest('.markdown img');
        if (target) {
            img.src = target.src;
            lightbox.classList.add('active');
        }
    });

    lightbox.addEventListener('click', function () {
        lightbox.classList.remove('active');
    });
})();

(function () {
    const track = document.getElementById('projetos-track');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsWrap = document.getElementById('dots');
    const cards = Array.from(track.children);

    // build dots
    cards.forEach((_, i) => {
        const d = document.createElement('span');
        d.className = 'dot' + (i === 0 ? ' active' : '');
        dotsWrap.appendChild(d);
    });
    const dots = Array.from(dotsWrap.children);

    function cardStep() {
        const card = cards[0];
        const style = getComputedStyle(track);
        const gap = parseFloat(style.columnGap || style.gap || 0);
        return card.offsetWidth + gap;
    }

    function updateUI() {
        const maxScroll = track.scrollWidth - track.clientWidth - 2;
        prevBtn.disabled = track.scrollLeft <= 0;
        nextBtn.disabled = track.scrollLeft >= maxScroll;

        const activeIndex = Math.round(track.scrollLeft / cardStep());
        dots.forEach((d, i) => d.classList.toggle('active', i === activeIndex));
    }

    prevBtn.addEventListener('click', () => {
        track.scrollBy({ left: -cardStep(), behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', () => {
        track.scrollBy({ left: cardStep(), behavior: 'smooth' });
    });

    track.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') { track.scrollBy({ left: cardStep(), behavior: 'smooth' }); }
        if (e.key === 'ArrowLeft') { track.scrollBy({ left: -cardStep(), behavior: 'smooth' }); }
    });

    let scrollTimeout;
    track.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(updateUI, 60);
    });

    window.addEventListener('resize', updateUI);
    updateUI();
})();
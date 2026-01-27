document.addEventListener('DOMContentLoaded', () => {
    const revealOnScroll = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show-section');

                    setTimeout(() => {
                        entry.target.style.transitionDelay = '0s';
                    }, 1500);

                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        document.querySelectorAll('.hidden-section').forEach(el => observer.observe(el));
    };

    const setupStagger = () => {
        const grids = ['.feature-card', '.step'];
        grids.forEach(selector => {
            document.querySelectorAll(selector).forEach((el, i) => {
                el.style.transitionDelay = `${i * 120}ms`;
            });
        });
    };

    revealOnScroll();
    setupStagger();
});
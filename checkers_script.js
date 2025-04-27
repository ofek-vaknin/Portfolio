/* ================= Intersection Observer ל-Fade-in ================= */

// בוחרים את כל האלמנטים עם אפקט הופעה כלשהו
const fadeInElements = document.querySelectorAll(
  '.fade-in, .fade-in-big, .fade-down, .slide-in-left, .slide-in-right, .fade-up'
);

const observerOptions = {
  threshold: 0.3 // מופעל כש-30% מהאלמנט גלוי
};

const appearOnScroll = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    obs.unobserve(entry.target);
  });
}, observerOptions);

fadeInElements.forEach(el => {
  appearOnScroll.observe(el);
});

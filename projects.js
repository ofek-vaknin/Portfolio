<<<<<<< HEAD
const animatedElements = document.querySelectorAll(
  ".fade-in, .fade-in-big, .fade-down"
);

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    obs.unobserve(entry.target);
  });
}, { threshold: 0.25 });

animatedElements.forEach(el => observer.observe(el));
=======
const animatedElements = document.querySelectorAll(
  ".fade-in, .fade-in-big, .fade-down"
);

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    obs.unobserve(entry.target);
  });
}, { threshold: 0.25 });

animatedElements.forEach(el => observer.observe(el));
>>>>>>> a4c36a3 (Initial portfolio version)

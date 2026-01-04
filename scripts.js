<<<<<<< HEAD
// Fade-in animations
const animatedElements = document.querySelectorAll(".fade-in, .fade-in-big, .fade-down");

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("appear");
      obs.unobserve(entry.target);
    });
  },
  { threshold: 0.25 }
);

animatedElements.forEach((el) => observer.observe(el));

// Projects carousel arrows
const track = document.getElementById("projectsTrack");
if (track) {
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  const scrollByOneCard = (direction) => {
    const firstCard = track.querySelector(".project-card");
    if (!firstCard) return;

    const gap = 18;
    const amount = firstCard.getBoundingClientRect().width + gap;

    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  prevBtn?.addEventListener("click", () => scrollByOneCard(-1));
  nextBtn?.addEventListener("click", () => scrollByOneCard(1));
}
=======
// Fade-in animations
const animatedElements = document.querySelectorAll(".fade-in, .fade-in-big, .fade-down");

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("appear");
      obs.unobserve(entry.target);
    });
  },
  { threshold: 0.25 }
);

animatedElements.forEach((el) => observer.observe(el));

// Projects carousel arrows
const track = document.getElementById("projectsTrack");
if (track) {
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  const scrollByOneCard = (direction) => {
    const firstCard = track.querySelector(".project-card");
    if (!firstCard) return;

    const gap = 18;
    const amount = firstCard.getBoundingClientRect().width + gap;

    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  prevBtn?.addEventListener("click", () => scrollByOneCard(-1));
  nextBtn?.addEventListener("click", () => scrollByOneCard(1));
}
>>>>>>> a4c36a3 (Initial portfolio version)

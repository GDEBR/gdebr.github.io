// script.js

document.addEventListener("DOMContentLoaded", () => {
  const citation = document.querySelector(".citation blockquote");

  // Animation douce au survol de la citation
  citation.addEventListener("mouseenter", () => {
    citation.style.transition = "transform 0.3s ease, color 0.3s ease";
    citation.style.transform = "scale(1.03)";
    citation.style.color = "#2f6633";
  });

  citation.addEventListener("mouseleave", () => {
    citation.style.transform = "scale(1)";
    citation.style.color = "";
  });

  // Animation au scroll (révélations progressives des blocs)
  const blocs = document.querySelectorAll(".fiche-info .bloc");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  blocs.forEach((bloc) => observer.observe(bloc));
});

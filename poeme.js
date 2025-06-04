
// Feuilles tombantes
function createLeaf() {
  const leaf = document.createElement("div");
  leaf.classList.add("leaf");
  leaf.style.left = `${Math.random() * 100}vw`;
  leaf.style.animationDuration = `${5 + Math.random() * 5}s`;
  leaf.style.opacity = Math.random();
  document.body.appendChild(leaf);

  setTimeout(() => {
    leaf.remove();
  }, 10000);
}

// Feuilles régulières
setInterval(createLeaf, 600);

// Apparition douce des blocs et citation
document.addEventListener("DOMContentLoaded", () => {
  const citation = document.querySelector(".citation blockquote");
  if (citation) {
    citation.addEventListener("mouseenter", () => {
      citation.style.transition = "transform 0.3s ease, color 0.3s ease";
      citation.style.transform = "scale(1.03)";
      citation.style.color = "#2f6633";
    });

    citation.addEventListener("mouseleave", () => {
      citation.style.transform = "scale(1)";
      citation.style.color = "";
    });
  }

  const blocs = document.querySelectorAll(".fiche-info .bloc");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  blocs.forEach((bloc) => observer.observe(bloc));
});
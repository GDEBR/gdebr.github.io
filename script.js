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

// Feuilles tombantes magiques
function createLeaf() {
  const leaf = document.createElement("div");
  leaf.classList.add("leaf");
  leaf.style.left = `${Math.random() * 100}vw`;
  leaf.style.animationDuration = `${5 + Math.random() * 5}s`; // durée de chute
  leaf.style.opacity = Math.random();
  document.body.appendChild(leaf);

  setTimeout(() => {
    leaf.remove();
  }, 10000);
}

setInterval(createLeaf, 500); // une feuille toutes les 0.5s

// Apparition douce des branches
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".branches li");

  links.forEach((li, i) => {
    li.style.opacity = "0";
    li.style.transform = "translateY(20px)";
    setTimeout(() => {
      li.style.transition = "all 0.6s ease";
      li.style.opacity = "1";
      li.style.transform = "translateY(0)";
    }, i * 200); // effet en cascade
  });
});

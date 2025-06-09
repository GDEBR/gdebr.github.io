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

// Liste des textures de feuilles
const feuilles = [
  "Feuille.png",
  "Feuille2.png",
  "Feuille3.png"
];

// Crée une feuille avec une image aléatoire
function createLeaf() {
  const leaf = document.createElement("div");
  leaf.classList.add("leaf");

  // Choix d'une image au hasard
  const image = feuilles[Math.floor(Math.random() * feuilles.length)];
  leaf.style.backgroundImage = `url('${image}')`;

  // Position aléatoire et animation
  leaf.style.left = `${Math.random() * 100}vw`;
  leaf.style.animationDuration = `${5 + Math.random() * 5}s`;
  leaf.style.opacity = Math.random();

  document.body.appendChild(leaf);

  // Nettoyage
  setTimeout(() => {
    leaf.remove();
  }, 10000);
}

// Lancer des feuilles régulièrement
setInterval(createLeaf, 500);


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

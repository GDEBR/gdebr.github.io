function createLeaf() {
  const leaf = document.createElement('div');
  leaf.classList.add('falling-leaf');
  leaf.style.left = Math.random() * window.innerWidth + 'px';
  leaf.style.animationDuration = (5 + Math.random() * 5) + 's';
  leaf.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
  document.body.appendChild(leaf);
  setTimeout(() => leaf.remove(), 11000);
}

setInterval(createLeaf, 500);
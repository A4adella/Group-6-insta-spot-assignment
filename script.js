// Wise

// Kosi

// Oma

window.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll("[data-focusable]");

  // Focus the first one
  if (cards.length > 0) {
    cards[0].focus();
  }

  // Add hover-to-focus
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.focus();

      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault(); // Stop space from scrolling
        }
      });
    });
  });
});


// Tawa

// Osas

// Ola

// Adella

// Innocent

// Kachi

// Kareema

// Olaide

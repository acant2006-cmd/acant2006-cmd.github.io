// =========================================
// Dynamic copyright year
// =========================================

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Section links use native anchors for URL hashes, keyboard navigation,
// and browser history. CSS handles smooth scrolling and reduced motion.

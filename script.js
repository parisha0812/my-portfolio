
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Mobile navigation menu
menuToggle.addEventListener("click", function () {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );

  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a navigation link
navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    menuToggle.textContent = "☰";
  });
});

// Automatically update the footer year
document.getElementById("year").textContent =
  new Date().getFullYear();


// ===== ADVANCED SCROLL REVEAL =====

const animatedBoxes = document.querySelectorAll(
  ".skill-card, .project-card, .education-item, .contact-box"
);

animatedBoxes.forEach((box, index) => {
  box.classList.add("reveal-box");

  // Cards enter with a subtle stagger
  const positionInGroup = index % 3;
  box.style.setProperty(
    "--reveal-delay",
    `${positionInGroup * 100}ms`
  );
});

const advancedObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-box");
        advancedObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: "0px 0px -45px 0px"
  }
);

animatedBoxes.forEach((box) => {
  advancedObserver.observe(box);
});

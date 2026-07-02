// developper — script partagé

document.addEventListener("DOMContentLoaded", () => {
  /* Menu mobile */
  const toggle = document.querySelector(".nav-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (toggle && mobileMenu) {
    toggle.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* Révélation au scroll */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in-view"));
  }

  /* Formulaire de contact — démo front-end uniquement.
     TODO (Claude Code) : brancher sur une Server Action / API route
     (ex. Resend) comme prévu dans CLAUDE.md, à la place de ce handler. */
  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const successEl = document.querySelector("#form-success");
      if (successEl) {
        successEl.classList.add("show");
        successEl.setAttribute("role", "status");
      }
      contactForm.reset();
    });
  }
});

//Burger navigation menu mobile
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav__toggle');
  const nav = document.querySelector('.main__nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    // Toggle the nav visibility class
    const isOpen = nav.classList.toggle('is-open');
    // Toggle the "open" state on the burger icon (for animation)
    toggle.classList.toggle('open', isOpen);
    // Keep ARIA state in sync for accessibility
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
});


// Keep ARIA state in sync for accessibility
    const accordions = document.querySelectorAll(".accordion__header");

    accordions.forEach(btn => {
        btn.addEventListener("click", () => {
            // Product page accordions (expand/collapse sections)
            const expanded = btn.getAttribute("aria-expanded") === "true";
            // Update ARIA state
            btn.setAttribute("aria-expanded", !expanded);

            // Expand/collapse the content panel (the next sibling element)
            const content = btn.nextElementSibling;
            if (!expanded) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = 0;
            }
        });
    });
    
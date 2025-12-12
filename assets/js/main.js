//Menu navegación burger
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav__toggle');
  const nav = document.querySelector('.main__nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
});


//Desplegables ficha producto
    const accordions = document.querySelectorAll(".accordion__header");

    accordions.forEach(btn => {
        btn.addEventListener("click", () => {
            const expanded = btn.getAttribute("aria-expanded") === "true";
            btn.setAttribute("aria-expanded", !expanded);

            const content = btn.nextElementSibling;
            if (!expanded) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = 0;
            }
        });
    });
    
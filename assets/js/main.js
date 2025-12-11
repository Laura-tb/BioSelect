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
    
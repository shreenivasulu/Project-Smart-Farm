document.addEventListener("DOMContentLoaded", () => {

    // Scroll for "Back to Top"
    document.querySelector(".back-top a").addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    document.querySelectorAll(".card, .feature-box div").forEach(card => {
        card.addEventListener("mouseenter", () => card.style.transform = "translateY(-10px)");
        card.addEventListener("mouseleave", () => card.style.transform = "translateY(0)");
    });

    document.querySelectorAll(".card button").forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            button.innerText = "✓ Added";
            button.style.background = "#1B5E20";

            setTimeout(() => {
                button.innerText = "Add to Cart";
                button.style.background = "#43A047";
            }, 1500);
        });
    });

});
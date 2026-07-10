document.addEventListener("DOMContentLoaded", () => {

    // Active Navigation
    document.querySelectorAll("nav a").forEach(link => {
        if (link.href === window.location.href) {
            link.style.color = "#FFD54F";
            link.style.fontWeight = "bold";
        }
    });

    // Back To Top
    document.querySelector(".back-top a").onclick = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Scroll Animation
    const cards = document.querySelectorAll(".service-card, .step");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition = "0.6s ease";
        observer.observe(card);
    });

    // Shop Now Button
    const btn = document.querySelector(".product-button");
    btn.addEventListener("mouseenter", () => btn.style.transform = "scale(1.08)");
    btn.addEventListener("mouseleave", () => btn.style.transform = "scale(1)");

    // Welcome Message
    console.log("🌱 Welcome to Smart Farm Services");
});
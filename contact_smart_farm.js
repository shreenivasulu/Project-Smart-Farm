const backTop = document.querySelector(".back-top a");
if (backTop) {
    backTop.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

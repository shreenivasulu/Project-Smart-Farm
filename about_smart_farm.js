// Back To Top
    document.querySelector(".back-top a").onclick = (backtoTop) => {
        backtoTop.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

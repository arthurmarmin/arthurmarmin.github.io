function setLanguage(lang) {
    const elements = document.querySelectorAll("[data-fr][data-en]");

    elements.forEach(el => {
        if (lang === "fr") {
            el.innerHTML = el.getAttribute("data-fr");
        } else {
            el.innerHTML = el.getAttribute("data-en");
        }
    });

    localStorage.setItem("lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
    const lang = localStorage.getItem("lang") || "fr";
    setLanguage(lang);
});

async function loadComponent(id, file) {

    const response = await fetch(file);

    const html = await response.text();

    document.getElementById(id).innerHTML = html;
}

window.addEventListener("DOMContentLoaded", async () => {

    await loadComponent(
        "header-container",
        "components/header.html"
    );

    await loadComponent(
        "footer-container",
        "components/footer.html"
    );

    if(typeof setLanguage === "function"){

        setLanguage(
            localStorage.getItem("lang") || "fr"
        );

    }

});

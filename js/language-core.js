
// Get current language
const currentLang = localStorage.getItem("pts_lang");

// Apply language on page load
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.getAttribute("data-lang");
        if (translations[currentLang] && translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });

    // Highlight active language button
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.remove("active");
        if (btn.dataset.lang === currentLang) {
            btn.classList.add("active");
        }
    });
});

// Change language
function changeLanguage(lang) {
    localStorage.setItem("pts_lang", lang);
    location.reload();
}

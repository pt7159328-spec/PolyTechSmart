// Default language
if (!localStorage.getItem("pts_lang")) {
    localStorage.setItem("pts_lang", "en");
}

// Get selected language
const currentLang = localStorage.getItem("pts_lang");

// Apply language on page load
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.getAttribute("data-lang");
        el.textContent = translations[currentLang][key];
    });
});

// Change language function
function changeLanguage(lang) {
    localStorage.setItem("pts_lang", lang);
    location.reload();
}

// Language texts
const translations = {
    en: {
        title: "Technology Powered Learning Platform",
        desc: "PolyTechSmart is a modern educational platform designed for RGPV Polytechnic students.",
        register: "Register",
        login: "Login"
    },
    hi: {
        title: "तकनीक आधारित शिक्षण मंच",
        desc: "PolyTechSmart RGPV पॉलिटेक्निक छात्रों के लिए बनाया गया एक आधुनिक शैक्षणिक प्लेटफ़ॉर्म है।",
        register: "रजिस्टर करें",
        login: "लॉगिन करें"
    }
};

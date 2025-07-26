// ====== تأثير الكتابة (Typewriter) ======
const text = "Welcome to Code With Moha!";
const typewriterElement = document.getElementById("typewriter");
let index = 0;
const speed = 100; // سرعة الكتابة

function typeWriter() {
    if (index < text.length) {
        typewriterElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}
window.addEventListener("load", typeWriter);

// ====== زر العودة للأعلى ======
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});
backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ====== تأثير دخول قسم البطل (Hero) ======
document.addEventListener("DOMContentLoaded", () => {
    const heroSection = document.querySelector(".hero");
    heroSection.style.opacity = "0";
    heroSection.style.transform = "translateY(30px)";
    setTimeout(() => {
        heroSection.style.transition = "opacity 1s ease, transform 1s ease";
        heroSection.style.opacity = "1";
        heroSection.style.transform = "translateY(0)";
    }, 200);

    const contactSection = document.querySelector(".contact");
    if (contactSection) {
        contactSection.style.opacity = "0";
        contactSection.style.transform = "translateY(30px)";
        window.addEventListener("scroll", () => {
            const sectionPos = contactSection.getBoundingClientRect().top;
            if (sectionPos < window.innerHeight - 100) {
                contactSection.style.transition = "opacity 1s ease, transform 1s ease";
                contactSection.style.opacity = "1";
                contactSection.style.transform = "translateY(0)";
            }
        });
    }
});

// ====== إضافة فئة fade-in و fade-in-up تلقائياً عند الظهور ======
window.addEventListener("scroll", () => {
    document.querySelectorAll('.fade-in, .fade-in-up').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
});


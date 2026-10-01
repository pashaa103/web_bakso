/* =========================
   LOADING SCREEN
========================= */

window.addEventListener("load", () => {

    setTimeout(() => {
        document.querySelector(".loader").classList.add("hide");
    }, 1200);

});


/* =========================
   NAVBAR SCROLL
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("open");

    if (navMenu.classList.contains("open")) {
        menuToggle.innerHTML = "✕";
    } else {
        menuToggle.innerHTML = "☰";
    }

});


/* =========================
   CLOSE MOBILE MENU
========================= */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");
        menuToggle.innerHTML = "☰";

    });

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {
    revealObserver.observe(element);
});


/* =========================
   ORDER MENU
========================= */

function orderMenu(menuName) {

    const phone = "6281234567890";

    const message =
        `Halo BAKSO SERDANG!%0A%0A` +
        `Saya ingin memesan:%0A` +
        `🍜 ${menuName}%0A%0A` +
        `Mohon informasi lebih lanjut. Terima kasih!`;

    const whatsappURL =
        `https://wa.me/${phone}?text=${message}`;

    window.open(whatsappURL, "_blank");

}


/* =========================
   COPY PROMO
========================= */

function copyPromo() {

    const promo = "SERDANG25";

    navigator.clipboard.writeText(promo)
        .then(() => {

            showToast("Kode promo SERDANG25 berhasil disalin!");

        })
        .catch(() => {

            showToast("Kode promo: SERDANG25");

        });

}


/* =========================
   TOAST
========================= */

function showToast(message) {

    const toast = document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}


/* =========================
   BUTTON RIPPLE EFFECT
========================= */

const buttons = document.querySelectorAll(
    ".btn-primary, .btn-secondary, .order-btn, .promo-button, .whatsapp-btn"
);

buttons.forEach(button => {

    button.addEventListener("click", function(e) {

        const ripple = document.createElement("span");

        ripple.style.position = "absolute";
        ripple.style.width = "20px";
        ripple.style.height = "20px";
        ripple.style.background = "rgba(255,255,255,.3)";
        ripple.style.borderRadius = "50%";
        ripple.style.transform = "scale(0)";
        ripple.style.animation = "ripple .6s linear";
        ripple.style.left = `${e.offsetX}px`;
        ripple.style.top = `${e.offsetY}px`;
        ripple.style.pointerEvents = "none";

        this.style.position = "relative";
        this.style.overflow = "hidden";

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);

    });

});


/* =========================
   RIPPLE ANIMATION
========================= */

const rippleStyle = document.createElement("style");

rippleStyle.innerHTML = `
    @keyframes ripple {
        to {
            transform: scale(10);
            opacity: 0;
        }
    }
`;

document.head.appendChild(rippleStyle);
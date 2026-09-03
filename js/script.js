/* ============================================================
   HEAVEN FURNITURE MART
   Main JavaScript
   ============================================================ */


/* ============================================================
   01. ELEMENT REFERENCES
   ============================================================ */

const siteHeader = document.getElementById("siteHeader");

const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const mobileNav =
    document.getElementById("mobileNav");

const currentYear =
    document.getElementById("currentYear");


/* ============================================================
   02. HEADER SCROLL EFFECT
   ============================================================ */

function handleHeaderScroll() {

    const scrollPosition = window.scrollY;

    if (scrollPosition > 40) {
        siteHeader.classList.add("scrolled");
    } else {
        siteHeader.classList.remove("scrolled");
    }
}


/* Listen for scrolling */

window.addEventListener(
    "scroll",
    handleHeaderScroll,
    { passive: true }
);


/* Run once when page loads */

handleHeaderScroll();


/* ============================================================
   03. MOBILE NAVIGATION
   ============================================================ */

function toggleMobileMenu() {

    const isOpen =
        mobileNav.classList.toggle("open");

    mobileMenuButton.classList.toggle(
        "active",
        isOpen
    );

    mobileMenuButton.setAttribute(
        "aria-expanded",
        isOpen
    );
}


mobileMenuButton.addEventListener(
    "click",
    toggleMobileMenu
);


/* ============================================================
   04. CLOSE MOBILE MENU AFTER CLICK
   ============================================================ */

const mobileLinks =
    mobileNav.querySelectorAll("a");


mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mobileNav.classList.remove("open");

        mobileMenuButton.classList.remove("active");

        mobileMenuButton.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


/* ============================================================
   05. CURRENT YEAR
   ============================================================ */

currentYear.textContent =
    new Date().getFullYear();


/* ============================================================
   06. SMOOTH SCROLL
   ============================================================ */

const anchorLinks =
    document.querySelectorAll('a[href^="#"]');


anchorLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        const target =
            document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        const headerHeight =
            siteHeader.offsetHeight;

        const targetPosition =
            target.offsetTop - headerHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });

    });

});
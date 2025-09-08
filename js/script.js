// Dynamically set Date
const yearEl = document.querySelector(".copyright-year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Mobile Navigation
const header = document.querySelector(".header");
const btnOpen = document.querySelector('.icon-mobile-nav[name="menu-outline"]');
const btnClose = document.querySelector(
  '.icon-mobile-nav[name="close-outline"]'
);
const navLinks = document.querySelectorAll(".main-nav-link");

btnOpen.addEventListener("click", () => {
  header.classList.add("nav-open");
});

btnClose.addEventListener("click", () => {
  header.classList.remove("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("nav-open");
  });
});

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

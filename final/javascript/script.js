const contrastButton = document.getElementById("contrast-toggle");

if (contrastButton) {
  contrastButton.addEventListener("click", function () {
    document.body.classList.toggle("high-contrast");
  });
}

const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.getElementById("main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", function () {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", !expanded);
    mainNav.classList.toggle("open");
  });
}

function validateEmail(input, messageBox) {
  const emailValue = input.value.trim();

  if (!emailValue || !emailValue.includes("@") || !emailValue.includes(".")) {
    messageBox.textContent = "Please enter a valid email address so we can stay connected.";
    messageBox.classList.remove("success");
    messageBox.classList.add("error");
    return false;
  } else {
    messageBox.textContent = "Great! Your email looks good — we appreciate you reaching out.";
    messageBox.classList.remove("error");
    messageBox.classList.add("success");
    return true;
  }
}

const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    const emailInput = document.getElementById("email");
    const emailMessage = document.getElementById("email-message");

    if (!validateEmail(emailInput, emailMessage)) {
      event.preventDefault();
    }
  });
}

const homeForm = document.getElementById("home-email-form");
if (homeForm) {
  homeForm.addEventListener("submit", function (event) {
    const homeEmailInput = document.getElementById("home-email");
    const homeEmailMessage = document.getElementById("home-email-message");

    if (!validateEmail(homeEmailInput, homeEmailMessage)) {
      event.preventDefault();
    }
  });
}

const filterButtons = document.querySelectorAll(".filter-btn");
const products = document.querySelectorAll(".product-item");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-filter");

    products.forEach(product => {
      if (category === "all" || product.getAttribute("data-category") === category) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});

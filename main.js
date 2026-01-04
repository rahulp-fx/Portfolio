// Initialize Icons
lucide.createIcons();

// Reveal Animations on scroll
const reveal = () => {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("active");
    }
  });
};

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// Mobile Menu toggle

const menuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

const toggleMenu = () => {
  const isHidden =
    mobileMenu.style.display === "none" || mobileMenu.style.display === "";
  mobileMenu.style.display = isHidden ? "flex" : "none";
  document.body.style.overflow = isHidden ? "hidden" : "auto";
};

menuBtn.addEventListener("click", toggleMenu);

// Sticky Nav Change
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  const navInner = nav.querySelector(".nav-inner");
  if (window.scrollY > 50) {
    nav.classList.add("glass");
    nav.style.borderBottom = "1px solid rgba(255,255,255,0.05)";
    navInner.style.padding = "0.75rem 0";
    nav.style.backgroundColor = "rgba(10,10,10,0.9)";
  } else {
    nav.classList.remove("glass");
    nav.style.borderBottom = "none";
    navInner.style.padding = "1rem 0";
    nav.style.backgroundColor = "transparent";
  }
});

// modal
const modalSuccess = document.getElementById("custom-success-modal");
const modalError = document.getElementById("custom-error-modal");

function openSuccessModal() {
  modalSuccess.style.display = "flex";
  setTimeout(() => {
    modalSuccess.querySelector(".modal-content").classList.add("active");
  }, 10);
}

function openErrorModal() {
  modalError.style.display = "flex";
  setTimeout(() => {
    modalError.querySelector(".modal-content").classList.add("active");
  }, 10);
}

function closeModal() {
  [modalSuccess, modalError].forEach((modal) => {
    modal.style.display = "none";
    modal.querySelector(".modal-content").classList.remove("active");
  });
}

// formspree linked + js logic
const form = document.querySelector("form");

form.addEventListener("submit", async (event) => {
  event.preventDefault(); //stop the refresh

  const data = new FormData(event.target);

  fetch(event.target.action, {
    method: "post",
    body: data,
    headers: {
      Accept: "application/json", //tells formspree I want json response
    },
  })
    .then((response) => {
      if (response.ok) {
        openSuccessModal();
        form.reset();
      } else {
        openErrorModal();
      }
    })
    .catch((error) => {
      openErrorModal();
    });

  //old js logic

  // //Get data from inputs
  // const name = form.querySelector('input[placeholder="Your Name"]').value;
  // const email = form.querySelector('input[placeholder="name@gmail.com"]').value;
  // const message = form.querySelector('textarea').value;

  // //validate
  // if (name && email && message){
  //   alert(`Thanks ${name}! Your message has been sent.`);

  //   form.reset();
  // } else {
  //   alert("Please fill in all fields");
  // }
});

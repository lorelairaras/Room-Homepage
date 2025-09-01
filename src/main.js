// Slide data
const slides = [
  {
    desktopImage: "desktop-image-hero-1.jpg",
    mobileImage: "mobile-image-hero-1.jpg",
    title: "Discover innovative ways to decorate",
    description:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    desktopImage: "desktop-image-hero-2.jpg",
    mobileImage: "mobile-image-hero-2.jpg",
    title: "We are available all across the globe",
    description:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    desktopImage: "desktop-image-hero-3.jpg",
    mobileImage: "mobile-image-hero-3.jpg",
    title: "Manufactured with the best materials",
    description:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

// DOM Elements
const desktopHero = document.getElementById("desktop-hero");
const mobileHero = document.getElementById("mobile-hero");
const slideTitle = document.getElementById("slide-title");
const slideDescription = document.getElementById("slide-description");
const prevButton = document.getElementById("prev-slide");
const nextButton = document.getElementById("next-slide");
const mobileMenuButton = document.getElementById("mobile-menu-button");
const closeMenuButton = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");

// Current slide index
let currentSlide = 0;

// Function to update slide content
function updateSlide() {
  const slide = slides[currentSlide];
  if (desktopHero) desktopHero.src = slide.desktopImage;
  if (mobileHero) mobileHero.src = slide.mobileImage;
  slideTitle.textContent = slide.title;
  slideDescription.textContent = slide.description;
}

// Event listeners for slide navigation
prevButton.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide();
});

nextButton.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
});

// Mobile menu functionality
mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
  document.body.style.overflow = "hidden";
});

closeMenuButton.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
  document.body.style.overflow = "auto";
});

// Keyboard navigation for slides
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
  } else if (e.key === "ArrowRight") {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
  }
});

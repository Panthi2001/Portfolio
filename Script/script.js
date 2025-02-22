const text = "Hello, it's Kushal. Glad you're here!"; // The text to type out
let index = 0;
let typingDone = false;

//nav bar
function toggleMenu() {
  const navList = document.querySelector(".nav-list");
  navList.classList.toggle("show");
}

// Close the menu when clicking outside of it
document.addEventListener("click", function (event) {
  const navList = document.querySelector(".nav-list");
  const hamburger = document.querySelector(".hamburger");

  // Check if the click was outside the navigation and the hamburger icon
  if (!navList.contains(event.target) && !hamburger.contains(event.target)) {
    navList.classList.remove("show");
  }
});

// Close the menu when a navigation item is clicked
const navLinks = document.querySelectorAll(".nav-list a");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    const navList = document.querySelector(".nav-list");
    navList.classList.remove("show");
  });
});

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  } else {
    typingDone = true;

    document.querySelector(".about").addEventListener("click", revealMoreInfo);
  }
}

function revealMoreInfo() {
  if (typingDone) {
    document.querySelector(".about").classList.add("expanded");
    document.querySelector(".about-text").innerHTML =
      "I am Kushal Panthi, a senior at the University of North Texas, pursuing my Bachelor's in Computer Science. " +
      "Throughout my degree, I have gained a strong foundation in C++, object-oriented programming, system administration, " +
      "data structures, and algorithms. In my final semester, I am exploring machine learning and natural language processing with Python. " +
      "I am excited to apply my skills to real-world challenges and innovative projects!";
  }
}

// Start the typing effect when the page loads
document.addEventListener("DOMContentLoaded", typeEffect);

document.querySelectorAll(".skill-box").forEach((box) => {
  box.addEventListener("click", () => {
    // Toggle the active class to show/hide content
    box.classList.toggle("active");
  });
});

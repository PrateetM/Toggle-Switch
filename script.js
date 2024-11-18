// Elements
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check localStorage for saved theme
const savedTheme = localStorage.getItem("theme");

// Apply the saved theme (if exists)
if (savedTheme) {
  body.classList.add(savedTheme);
  themeToggle.checked = savedTheme === "dark";
}

// Toggle theme function
function toggleTheme() {
  if (themeToggle.checked) {
    body.classList.remove("light");
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    localStorage.setItem("theme", "light");
  }
}

// Event listener for toggle switch
themeToggle.addEventListener("change", toggleTheme);

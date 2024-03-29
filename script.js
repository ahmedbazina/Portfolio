// Click events for buttons
const portfolio = document.getElementById("portfolio");
const portfolioBtn = document.getElementById("portfolio-btn");
const skills = document.getElementById("skills");
const skillsBtn = document.getElementById("skills-btn");

portfolioBtn.addEventListener("click", (event) => {
  skills.style.display = "none";
  portfolio.style.display = "flex";
  skillsBtn.classList.remove("active-btn");
  portfolioBtn.classList.add("active-btn");
});

skillsBtn.addEventListener("click", (event) => {
  skills.style.display = "flex";
  portfolio.style.display = "none";
  portfolioBtn.classList.remove("active-btn");
  skillsBtn.classList.add("active-btn");
});

// Light & Dark Theme
document.addEventListener("DOMContentLoaded", () => {
  const toggleThemeButton = document.getElementById("toggleTheme");
  const themeIcon = document.querySelector('img[alt="theme icon"]');
  const linktreeLogo = document.querySelector('img[alt="linktree logo"]');
  const githubLogo = document.querySelector('img[alt="github logo"]');
  const linkedinLogo = document.querySelector('img[alt="linkedin logo"]');
  const emailLogo = document.querySelector('img[alt="email logo"]');

  const lightLogos = {
    linktree: "assets/icons/linktree_light.png",
    github: "assets/icons/github_light.png",
    linkedin: "assets/icons/linkedin_light.png",
    email: "assets/icons/email_light.png",
    theme: "assets/icons/light.png",
  };

  const darkLogos = {
    linktree: "assets/icons/linktree_dark.png",
    github: "assets/icons/github_dark.png",
    linkedin: "assets/icons/linkedin_dark.png",
    email: "assets/icons/email_dark.png",
    theme: "assets/icons/dark.png",
  };

  function setTheme(isDark) {
    linktreeLogo.src = isDark ? darkLogos.linktree : lightLogos.linktree;
    githubLogo.src = isDark ? darkLogos.github : lightLogos.github;
    linkedinLogo.src = isDark ? darkLogos.linkedin : lightLogos.linkedin;
    emailLogo.src = isDark ? darkLogos.email : lightLogos.email;
    themeIcon.src = isDark ? darkLogos.theme : lightLogos.theme;
  }

  toggleThemeButton.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    localStorage.setItem("isDark", isDark);

    setTheme(isDark);
  });

  const loadTheme = () => {
    const isDark = localStorage.getItem("isDark") === "true";
    document.body.classList.toggle("dark-theme", isDark);

    setTheme(isDark);
  };

  // Load saved theme from local storage or default to light theme
  loadTheme();
});

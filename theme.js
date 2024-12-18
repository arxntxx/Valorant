document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  const loadHeader = async () => {
    try {
      const response = await fetch("header.html");
      const data = await response.text();
      const container = document.getElementById("header-container");

      if (container) {
        container.innerHTML = data;
        attachThemeToggleEvents();
        attachThemeToggleEventsMobile();
        attachMenuToggleEvent();
        initializeTheme();
      } else {
        console.error("No se encontró el contenedor del header.");
      }
    } catch (error) {
      console.error("Error al cargar el encabezado:", error);
    }
  };
  // Función para aplicar el tema
  const applyTheme = (theme) => {
    if (theme === "dark") {
      body.classList.add("bg-gray-900", "text-gray-100");
      body.classList.remove("bg-white", "text-gray-900");
    } else {
      body.classList.add("bg-white", "text-gray-900");
      body.classList.remove("bg-gray-900", "text-gray-100");
    }
    updateHeader(theme);
    updateIndex(theme);
    updateAgents(theme);
  };

  const updateHeader = (theme) => {
    const themeToggleButton = document.querySelector("#theme-toggle img");
    const themeToggleMobile = document.querySelector("#theme-toggle-mobile img");
    const logo = document.querySelector("#logo");
    const home = document.querySelector("#home");
    const agents = document.querySelector("#agents");
    const maps = document.querySelector("#maps");
    const bgHeader = document.querySelector("#bg-header");
    const logoMobile = document.querySelector("#logo-mobile");
    const menu = document.querySelector("#menu-btn img");

    if (bgHeader) {
      bgHeader.style.backgroundColor = theme === "dark" ? "#ffffff" : "#131313";
    }
    if (themeToggleButton) {
      themeToggleButton.src =
        theme === "dark" ? "assets/luna-negro.png" : "assets/sol-blanco.png";
    }
    if (logo) {
      logo.src =
        theme === "dark" ? "assets/logo-negro.png" : "assets/logo-blanco.png";
    }
    if (home) {
      home.src =
        theme === "dark" ? "assets/casa-negro.png" : "assets/casa-blanco.png";
    }
    if (agents) {
      agents.src =
        theme === "dark"
          ? "assets/agente-negro.png"
          : "assets/agente-blanco.png";
    }
    if (maps) {
      maps.src =
        theme === "dark" ? "assets/mapa-negro.png" : "assets/mapa-blanco.png";
    }
    if (themeToggleMobile) {
      themeToggleMobile.src =
        theme === "dark" ? "assets/luna-blanco.png" : "assets/sol-negro.png";
    }
    if (logoMobile) {
      logoMobile.src = theme === "dark" ? "assets/logo-blanco.png" : "assets/logo-negro.png";
    }
    if (menu) {
      menu.src = theme === "dark"? "assets/menu-claro.png" : "assets/menu-oscuro.png";
    }
  };

  const updateIndex = (theme) => {
    const agent = document.querySelector("#agent-img");
    const bgSection = document.querySelector("#bg-section2");
    const textExplore = document.querySelector("#explore");
    const boxShadow = document.querySelector("#box-shadow");
    const heroMobile = document.querySelector("#hero-mobile");

    if (agent) {
      agent.src = theme === "dark" ? "assets/fade.png" : "assets/raze.png";
    }
    if (bgSection) {
      bgSection.src =
        theme === "dark" ? "assets/fondo-blanco.png" : "assets/fondo-negro.png";
    }
    if (textExplore) {
      textExplore.style.color = theme === "dark" ? "#ffffff" : "#000000";
    }
    if (boxShadow) {
      boxShadow.style.boxShadow =
        theme === "dark"
          ? "inset 0px 49px 81px 28px rgba(17, 24, 35, 1)"
          : "inset 0px 49px 81px 28px rgba(255, 255, 255, 0.8)";
    }
    if (heroMobile) {
      heroMobile.src =
        theme === "dark"
          ? "assets/letras-blanco.png"
          : "assets/letras-negro.png";
    }
  };

  const updateAgents = (theme) => {
    const bg = document.querySelector("#letras");

    if (bg) {
      bg.src =
        theme === "dark"
          ? "assets/letras-blanco2.png"
          : "assets/Valorant_logo.svg.png";
    }
  };

  // Inicializar el tema
  const initializeTheme = () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);
  };

  // Alternar el tema entre claro y oscuro
  const toggleTheme = () => {
    const isDark = body.classList.contains("bg-gray-900");
    const newTheme = isDark ? "light" : "dark";

    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu) {
      mobileMenu.classList.toggle("hidden");
    }
  };

  const attachMenuToggleEvent = () => {
    const menuButton = document.getElementById("menu-btn");
    if (menuButton) {
      menuButton.addEventListener("click", toggleMobileMenu);
    }
  };

  const attachThemeToggleEvents = () => {
    const themeToggleButton = document.getElementById("theme-toggle");

    if (themeToggleButton)
      themeToggleButton.addEventListener("click", toggleTheme);
  };

  const attachThemeToggleEventsMobile = () => {
    const themeToggleButton = document.getElementById("theme-toggle-mobile");

    if (themeToggleButton)
      themeToggleButton.addEventListener("click", toggleTheme);
  };

  loadHeader();
});

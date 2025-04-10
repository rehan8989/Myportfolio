document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    if (!darkModeToggle) {
        console.error("Dark mode toggle button not found!");
        return;
    }

    // Check localStorage for dark mode preference
    const isDarkMode = localStorage.getItem("darkMode") === "enabled";
    if (isDarkMode) {
        body.classList.add("dark-mode");
        darkModeToggle.checked = true;
    }

    // Add event listener for toggle switch
    darkModeToggle.addEventListener("change", function () {
        if (darkModeToggle.checked) {
            body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "enabled");
        } else {
            body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "disabled");
        }
    });
});

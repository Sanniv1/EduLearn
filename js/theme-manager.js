document.addEventListener('DOMContentLoaded', function() {
    // Wait for sidebar to be loaded
    setTimeout(() => {
        initializeTheme();
    }, 100);
});

function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    
    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.toggle('dark-theme', currentTheme === 'dark');
    updateThemeIcon(currentTheme === 'dark');

    // Add click event listener
    themeToggle?.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateThemeIcon(isDark);
    });
}

function updateThemeIcon(isDark) {
    const themeIcon = document.getElementById('themeIcon');
    if (themeIcon) {
        themeIcon.src = isDark ? '../assets/light-theme.svg' : '../assets/dark-theme.svg';
    }
} 
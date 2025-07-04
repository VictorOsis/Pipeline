const toggleButton = document.getElementById('toggleDarkMode');
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      toggleButton.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
    });
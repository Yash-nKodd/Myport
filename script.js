document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');  // Or 'nav a'

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      // Extract target ID from href (e.g., "#home" -> "home")
      let targetId = this.getAttribute('href').replace('#', '');
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        console.warn(`Section with id "${targetId}" not found.`);
      }
    });
  });
});

// static/js/main.js
document.addEventListener('DOMContentLoaded', function() {
    console.log('Phantom Black theme initialized');
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
          e.preventDefault();
          window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  });
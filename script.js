const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.16 });

revealItems.forEach((item) => observer.observe(item));
document.getElementById('year').textContent = new Date().getFullYear();

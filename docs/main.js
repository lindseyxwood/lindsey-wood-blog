console.log("Hello from the external JavaScript file!");

// Fade-in effect for project articles
window.addEventListener('scroll', () => {
    document.querySelectorAll('.project').forEach(project => {
        const projectTop = project.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (projectTop < windowHeight * 0.8) {
            project.classList.add('fade-in');
        }
    });
});

// Create Scroll to Top button
let scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '↑ Scroll to Top';
scrollToTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopBtn);

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Scroll to top when button is clicked
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Add hover effect to all images in the portfolio
document.querySelectorAll('.project img').forEach(image => {
    image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.1)';
        image.style.transition = 'transform 0.3s ease';
    });
    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
    });
});
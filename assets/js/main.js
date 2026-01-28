// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target?.scrollIntoView({ behavior: 'smooth' });
  });
});

// Progress bar
const updateProgressBar = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollProgress = (scrollTop / scrollHeight) * 100;
  
  const progressBar = document.getElementById('progress-bar');
  if (progressBar) {
    progressBar.style.transform = `translateX(-${100 - scrollProgress}%)`;
  }
};

// Update progress bar on scroll
window.addEventListener('scroll', updateProgressBar);
// Update progress bar on load
window.addEventListener('load', updateProgressBar);
// Update progress bar on resize
window.addEventListener('resize', updateProgressBar);

// Check if device is mobile - more reliable detection
const isMobile = () => {
  return window.innerWidth <= 768 || 
         'ontouchstart' in window || 
         navigator.maxTouchPoints > 0 ||
         /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: isMobile() ? 0.05 : 0.1,
  rootMargin: isMobile() ? '0px 0px -50px 0px' : '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // On mobile, add visible class immediately without animation
      if (isMobile()) {
        entry.target.classList.add('visible', 'no-animate');
      } else {
        entry.target.classList.add('visible');
      }
    }
  });
}, observerOptions);

document.querySelectorAll('.animate-fade-in').forEach(el => {
  observer.observe(el);
});

// Sticky CTA button after hero
const hero = document.querySelector('#hero');
const stickyCTA = document.querySelector('#sticky-cta');

if (hero && stickyCTA) {
  const heroObserver = new IntersectionObserver(
    ([entry]) => {
      stickyCTA.classList.toggle('hidden', entry.isIntersecting);
    },
    { threshold: 0.1 }
  );
  heroObserver.observe(hero);
}

// Netlify Form handling
const waitlistForm = document.querySelector('form[name="waitlist"]');
const successMessage = document.getElementById('success-message');

if (waitlistForm && successMessage) {
  waitlistForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(waitlistForm);
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });
      
      if (response.ok) {
        // Hide form and show success message
        waitlistForm.style.display = 'none';
        successMessage.classList.remove('hidden');
        
        // Optional: Reset form after 5 seconds
        setTimeout(() => {
          waitlistForm.style.display = 'block';
          successMessage.classList.add('hidden');
          waitlistForm.reset();
        }, 5000);
      } else {
        // Handle error
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      // Handle error
      alert('Something went wrong. Please try again.');
    }
  });
}

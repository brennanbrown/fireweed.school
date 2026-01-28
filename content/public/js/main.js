// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target?.scrollIntoView({ behavior: 'smooth' });
  });
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
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

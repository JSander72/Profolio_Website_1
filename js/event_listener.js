window.addEventListener('scroll', () => {
  const navBar = document.querySelector('.nav_bar');
  const navbarBrand = document.querySelector('.navbar-brand'); 

  if (window.scrollY > 0) {
      navBar.classList.add('scrolling');
      navbarBrand.classList.add('scrolling'); // Add the scrolling class to navbar-brand
  } else {
      navBar.classList.remove('scrolling');
      navbarBrand.classList.remove('scrolling'); // Remove the scrolling class when at the top
  }
});

function animateProgressBars() {
  const progressBars = document.querySelectorAll('.progress-bar');

  progressBars.forEach(progressBar => {
    const targetWidth   
= progressBar.getAttribute('aria-valuenow')   
+ '%';

    // Check if the progress bar is in the viewport
    const rect = progressBar.getBoundingClientRect();
    const isInViewport = (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth   
|| document.documentElement.clientWidth)
    );

    if (isInViewport)   
{
      progressBar.style.width = targetWidth;
    }
  });
}

// Initial check on page load
animateProgressBars();

// Check on scroll
window.addEventListener('scroll', animateProgressBars);


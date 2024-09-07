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

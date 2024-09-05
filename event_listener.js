window.addEventListener('scroll', () => {
    const navBar = document.querySelector('.nav_bar');
    if (window.scrollY > 0) {
      navBar.classList.add('scrolling');
    } else {
      navBar.classList.remove('scrolling');
    }
  });
  
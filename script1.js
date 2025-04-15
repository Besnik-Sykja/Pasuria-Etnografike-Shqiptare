
  
  window.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('activeSection')) {
      localStorage.setItem('activeSection', 'hyrja');
    }
  
    const section = localStorage.getItem('activeSection');
  
    switch (section) {
      case 'veriut':
        showVeriu();
        break;
      case 'mesme':
        showMesme();
        break;
      case 'jugut':
        showJugu();
        break;
      case 'hyrja':
      default:
        showHyrja();
        break;
    }
  });

  
  window.addEventListener('DOMContentLoaded', () => {
    // Ensure 'hyrja' is set if no section is found in localStorage
    if (!localStorage.getItem('activeSection')) {
      localStorage.setItem('activeSection', 'hyrja');
    }
  
    const section = localStorage.getItem('activeSection');
  
    // Now, we load the correct section based on the value of 'activeSection'
    switch (section) {
      case 'veriut':
        showVeriu();
        break;
      case 'mesme':
        showMesme();
        break;
      case 'jugut':
        showJugu();
        break;
      case 'hyrja':
      default:
        showHyrja(); // Show Hyrja when it's the default or no section is set
        break;
    }
  });
  
  // Ensure the event listeners for the buttons are initialized correctly
  document.getElementById('home-btn').addEventListener('click', () => {
    localStorage.setItem('activeSection', 'hyrja');
    showHyrja();
  });
  
  document.getElementById('veriut-btn').addEventListener('click', () => {
    localStorage.setItem('activeSection', 'veriut');
    showVeriu();
  });
  
  document.getElementById('mesme-btn').addEventListener('click', () => {
    localStorage.setItem('activeSection', 'mesme');
    showMesme();
  });
  
  document.getElementById('jugut-btn').addEventListener('click', () => {
    localStorage.setItem('activeSection', 'jugut');
    showJugu();
  }); 

  const mainBar = document.getElementById('main-bar');
  const topBarHeight = document.querySelector('.topbar').offsetHeight;
  const content = document.getElementById('content');
  
  // Sticky main bar on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY >= topBarHeight) {
      mainBar.classList.add('fixed');
    } else {
      mainBar.classList.remove('fixed');
    }
  });
  
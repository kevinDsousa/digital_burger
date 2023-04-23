window.addEventListener('scroll', function() {
    const btn = document.querySelector('.btn-back-to-top');
    if (window.scrollY > 200) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
  });
  
  document.querySelector('.btn-back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
  });
  
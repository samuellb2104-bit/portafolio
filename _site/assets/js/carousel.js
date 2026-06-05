window.addEventListener('load', function() {
  const cards = document.querySelectorAll('.project-card');

  cards.forEach(function(card) {
    const images = card.querySelectorAll('.card-images img');
    if (images.length === 0) return;

    let currentIndex = 0;
    let interval = null;

    card.addEventListener('mouseenter', function() {
      interval = setInterval(function() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
      }, 1500);
    });

    card.addEventListener('mouseleave', function() {
      clearInterval(interval);
      images[currentIndex].classList.remove('active');
      currentIndex = 0;
      images[0].classList.add('active');
    });
  });
});
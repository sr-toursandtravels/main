// Initialize Swiper sliders for each car card
// Keeps behavior unchanged from the previous inline script.

document.querySelectorAll('.car-slider').forEach(slider => {
  const slideCount = slider.querySelectorAll('.swiper-slide').length;

  const swiper = new Swiper(slider, {
    loop: slideCount > 1,
    navigation: {
      nextEl: slider.querySelector('.swiper-button-next'),
      prevEl: slider.querySelector('.swiper-button-prev'),
    }
  });

  if (slideCount === 1) {
    slider.querySelector('.swiper-button-next').style.display = 'none';
    slider.querySelector('.swiper-button-prev').style.display = 'none';
  }
});

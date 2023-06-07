window.addEventListener('DOMContentLoaded', function () {
  let slides = document.querySelectorAll('.slide');
  let currentSlide = 0;
  const prevButton = document.getElementById('gallery-prev');
  const nextButton = document.getElementById('gallery-next');

  // Display the first slide
  slides[currentSlide].style.display = 'block';

  // Function to change slide
  function nextSlide() {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = 'block';
  }

  function prevSlide() {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
  }

  // Change slide when next button is clicked
  nextButton.addEventListener('click', nextSlide);

  // Change slide when previous button is clicked
  prevButton.addEventListener('click', prevSlide);

  // Change slide every 3 seconds
  setInterval(nextSlide, 3000);
});

window.addEventListener('DOMContentLoaded', function () {
  let slides = document.querySelectorAll('.slide-glamour');
  let currentSlide = 0;
  const prevButton = document.getElementById('glamour-gallery-prev');
  const nextButton = document.getElementById('glamour-gallery-next');

  // Display the first slide
  slides[currentSlide].style.display = 'block';

  // Function to change slide
  function nextSlide() {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = 'block';
  }

  function prevSlide() {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
  }

  // Change slide when next button is clicked
  nextButton.addEventListener('click', nextSlide);

  // Change slide when previous button is clicked
  prevButton.addEventListener('click', prevSlide);

  // Change slide every 3 seconds
  setInterval(nextSlide, 3000);
});

function calculateTotal(selectElement) {
  const quantities = document.querySelectorAll('.quantidade');
  let totalClassicPrice = 0;
  let totalGlamourPrice = 0;

  quantities.forEach((quantityElement) => {
    const selectedQuantity = parseInt(quantityElement.value);
    const productType = quantityElement.parentElement.textContent;

    if (productType.includes('Typiller Classic')) {
      const ClassicPrice = 120;
      totalClassicPrice += selectedQuantity * ClassicPrice;
    }

    if (productType.includes('Typiller Glamour')) {
      const GlamourPrice = 400;
      totalGlamourPrice += selectedQuantity * GlamourPrice;
    }
  });

  const totalPrice = totalClassicPrice + totalGlamourPrice;

  const totalValueElement = document.querySelector('.total-value');
  totalValueElement.textContent = `Total: $${totalPrice}`;

  const payment = document.querySelector('.payment');
  if (totalPrice) {
    payment.classList.remove('none');
    totalValueElement.classList.remove('none');
  } else {
    payment.classList.add('none');
    totalValueElement.classList.add('none');
  }
}

// Отримуємо всі елементи слайдера
const reviewsItems = document.querySelectorAll('.reviews-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Функція для оновлення ширини вьюпорта
function updateViewportWidth() {
  return window.innerWidth || document.documentElement.clientWidth;
}

window.addEventListener('resize', () => {
  if (updateViewportWidth() >= 1280)
  reviewsItems.forEach((item, i) => (item.style.display = 'list-item'));
});

document.addEventListener('DOMContentLoaded', function () {
  // Початковий індекс активного елемента
  let currentIndex = 0;

  // Функція для зміни відображення елементів
  function toggleMobileDisplay(index) {
    reviewsItems.forEach((item, i) => {
      if (i === index) {
        item.style.display = 'list-item';
      } else {
        item.style.display = 'none';
      }
    });
  }

  // Функція для зміни відображення елементів
  function toggleTabletDisplay(index) {
    reviewsItems.forEach((item, i) => {
      if (i === index || (i > 0 && i === index + 1)) {
        item.style.display = 'list-item';
      } else {
        item.style.display = 'none';
      }
    });
  }

  // Обробник подій для кнопки "prev"
  prevButton.addEventListener('click', function () {
    currentIndex =
      (currentIndex - 1 + reviewsItems.length) % reviewsItems.length;
    const viewportWidth = updateViewportWidth();
    if (viewportWidth < 768) toggleMobileDisplay(currentIndex);
    if (viewportWidth >= 768 && viewportWidth < 1280) {
      toggleTabletDisplay(currentIndex);
    }
  });

  // Обробник подій для кнопки "next"
  nextButton.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % reviewsItems.length;
    const viewportWidth = updateViewportWidth();
    if (viewportWidth < 768) toggleMobileDisplay(currentIndex);
    if (viewportWidth >= 768 && viewportWidth < 1280) {
      toggleTabletDisplay(currentIndex);
    }
  });

  // Обробник події зміни розміру вікна
  window.addEventListener('resize', function () {
    const viewportWidth = updateViewportWidth();
    // Оновити відображення при зміні розміру вікна
    if (viewportWidth < 768) toggleMobileDisplay(currentIndex);
    if (viewportWidth >= 768 && viewportWidth < 1280) {
      toggleTabletDisplay(currentIndex);
    }
  });

  // Встановлення початкового стану
  const viewportWidth = updateViewportWidth();
  if (viewportWidth < 768) toggleMobileDisplay(currentIndex);
  if (viewportWidth >= 768 && viewportWidth < 1280) {
    toggleTabletDisplay(currentIndex);
  }
});

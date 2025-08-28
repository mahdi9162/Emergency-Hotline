// Reuseable Functions
function getElement(id) {
  return document.getElementById(id);
}

function getElementsClass(className) {
  return document.getElementsByClassName(className);
}
// Heart Icon Functionalities
const cardContainer = getElement('card-container');
cardContainer.addEventListener('click', function (e) {
  if (e.target.className.includes('love-icon')) {
    if (e.target.className.includes('text-red-500') === false) {
      const loveCounter = getElement('love-counter').textContent;
      getElement('love-counter').textContent = Number(loveCounter) + 1;
      e.target.classList.remove('fa-regular');
      e.target.classList.add('fa-solid');
      e.target.classList.add('text-red-500');
    } else {
      const loveCounter = getElement('love-counter').textContent;
      getElement('love-counter').textContent = Number(loveCounter) - 1;
      e.target.classList.add('fa-regular');
      e.target.classList.remove('fa-solid');
      e.target.classList.remove('text-red-500');
    }
  }
});



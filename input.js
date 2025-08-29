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
  //   Call Button Functionalities
  const callButton = e.target.closest('.call-btn');
  if (callButton) {
    const serviceName = callButton.parentNode.parentNode.children[1].children[1].textContent;
    const serviceNumber = callButton.parentNode.parentNode.children[2].children[0].textContent;

    const coinCounter = Number(getElement('coin-counter').textContent);
    if (coinCounter >= 20) {
      getElement('coin-counter').textContent = coinCounter - 20;
    } else {
      alert('⚠️ Insufficient balance. A minimum of 20 coins is needed to place a call.');
      return;
    }
    alert(`📞 Calling ${serviceName} Service ${serviceNumber}...`);
  }

  //   Copy Button Functionalities
  const copyButton = e.target.closest('.copy-btn');
  if (copyButton) {
    const serviceNumber = copyButton.parentNode.parentNode.children[2].children[0].textContent;
    navigator.clipboard.writeText(serviceNumber).then(function () {
      copyButton.textContent = 'Copied';
      setTimeout(function () {
        copyButton.innerHTML = '<i class="fa-solid fa-copy"></i> Copy';
      }, 2000);
    });
  }
});

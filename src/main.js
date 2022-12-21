/**
 * imports
 */
import './css/main.scss';
// import Cookies from 'js-cookie';

document.addEventListener('DOMContentLoaded', function () {
  window.console.log('Hello from main.js 👋.');
});

//FAQ accordion

const accordionQuestionButtons = document.querySelectorAll('.accordion__question');

accordionQuestionButtons.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
    if (item.nextElementSibling.style.maxHeight) {
      item.nextElementSibling.style.maxHeight = null;
    } else {
      item.nextElementSibling.style.maxHeight =
      item.nextElementSibling.scrollHeight + 'px';
    }
  });
});

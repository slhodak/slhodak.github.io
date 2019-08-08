import View from './view.js';

window.onload = (event) => {
  View.renderDisplay('home');
  document.getElementsByClassName('titleBar')[0].addEventListener('mousedown', (event) => {
    View.renderDisplay('home');
  });
  Array.from(document.getElementsByClassName('choice')).forEach(element => {
    element.addEventListener('mousedown', event => {
      View.renderDisplay(event.target.dataset.name);
    });
  });
};

const Controller = {
  linkProject(item, link) {
    item.addEventListener('mousedown', e => {
      window.open(link, '_blank');
    });
    return item;
  }
};

export default Controller;

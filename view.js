import Templates from './templates.js';
import bundles from './bundles.js';

const View = {
  renderDisplay(which) {
    switch (which) {
      case 'bio':
        break;
      case 'projects':
        View.renderProjects();
        break;
      case 'blog':
        break;
      default:
        console.log('Unrecognized render option.');
        break;
    }
  },
  renderProjects() {
    const display = document.getElementsByClassName('display')[0];
    while (display.firstChild) {
      display.removeChild(display.firstChild);
    }
    display.append(Templates.projectList(bundles));
  }
};

export default View;

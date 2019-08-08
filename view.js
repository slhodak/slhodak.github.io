import Templates from './templates.js';
import projects from './projects.js';

const View = {
  renderDisplay(which) {
    const display = document.getElementsByClassName('display')[0];
    while (display.firstChild) {
      display.removeChild(display.firstChild);
    }
    switch (which) {
      case 'bio':
        break;
      case 'projects':
        View.renderProjects(display);
        break;
      case 'blog':
        break;
      default:
        console.log('Unrecognized render option.');
        break;
    }
  },
  renderBio(display) {

  },
  renderProjects(display) {
    display.append(Templates.projectList(projects));
  }
};

export default View;

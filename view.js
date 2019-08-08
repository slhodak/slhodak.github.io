import Templates from './templates.js';
import projects from './projects.js';
import Bio from './bio.js';

const View = {
  renderDisplay(which) {
    const display = document.getElementsByClassName('display')[0];
    while (display.firstChild) {
      display.removeChild(display.firstChild);
    }
    switch (which) {
      case 'home':
        View.renderGreeting(display);
        break;
      case 'bio':
        View.renderBio(display);
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
  renderGreeting(display) {
    display.innerHTML = '<p class="greeting">hello</p>';
  },
  renderBio(display) {
    display.append(Templates.myBio(Bio));
  },
  renderProjects(display) {
    display.append(Templates.projectList(projects));
  }
};

export default View;

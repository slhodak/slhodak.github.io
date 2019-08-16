import Templates from './templates.js';
import projects from './projects.js';
import Bio from './bio.js';

const View = {
  renderAll(display) {
    display.append(Templates.myBio(Bio));
    display.append(Templates.projectList(projects));
  }
};

export default View;

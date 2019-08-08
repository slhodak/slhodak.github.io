import Controller from './controller.js';

const Templates = {
  myBio() {
    //  create document fragment from some html
    //  return that
  },
  projectList(bundles) {
    const list = document.createElement('div');
    list.setAttribute('class', 'projectList');
    bundles.forEach(info => {
      list.append(Templates.projectListItem(info));
    });
    return list;
  },
  projectListItem(info) {
    const container = document.createElement('div');
    container.setAttribute('class', 'projectListItem');
    const header = document.createElement('div');
    header.setAttribute('class', 'projectHeader');
    const title = document.createElement('h3');
    title.setAttribute('class', 'projectTitle');
    title.innerText = info.title;
    const image = document.createElement('img');
    image.setAttribute('class', 'projectImage');
    image.setAttribute('src', `/images/${info.image}`);
    const details = Templates.projectDetails(info.details);
    details.setAttribute('class', 'projectDetails');
    header.append(title);
    header.append(image);
    container.append(header);
    container.append(details);
    return Controller.linkProject(container, info.link);
  },
  projectDetails(details) {
    const detailContainer = document.createElement('div');
    const summary = document.createElement('p');
    summary.setAttribute('class', 'projectSummary');
    summary.innerText = details.summary;
    detailContainer.append(summary);
    const techList = document.createElement('ul');
    details.technologies.forEach(technology => {
      let entry = document.createElement('li');
      entry.innerText = technology;
      techList.append(entry);
    });
    detailContainer.append(techList);
    return detailContainer;
  }
};

export default Templates;

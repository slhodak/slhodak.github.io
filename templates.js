import Controller from './controller.js';

const Templates = {
  myBio(info) {
    const bio = document.createElement('div');
    bio.innerHTML = `
      <div class="bio">
        <h1>Bio</h1>
        <p>${info.summary}</p>
        <p>${info.personal}</p>
        <p>${info.personal_two}</p>
        <p>${info.technical}</p>
        <img class="bioDivider" src="images/floral.svg"></img>
      </div>`;
    return bio;
  },
  projectList(bundles) {
    const list = document.createElement('div');
    const header = document.createElement('h1');
    header.setAttribute('class', 'projectListHeader');
    header.innerText = 'Projects';
    list.setAttribute('class', 'projectList');
    list.append(header);
    bundles.forEach(info => {
      if (info.active) {
        list.append(Templates.projectListItem(info));
      }
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
    const date = document.createElement('p');
    date.setAttribute('class', 'headerDate');
    date.innerText = info.date;
    const links = Templates.projectLinks(info.links);
    header.append(title);
    header.append(date);
    header.append(image);
    container.append(links);
    container.append(header);
    container.append(details);
    return container;
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
  },
  projectLinks(links) {
    const linksContainer = document.createElement('div');
    linksContainer.setAttribute('class', 'linksContainer');
    links.forEach(link => {
      const projLink = document.createElement('button');
      projLink.setAttribute('class', 'projLink');
      projLink.innerText = link.text;
      Controller.addLink(projLink, link.href)
      linksContainer.append(projLink);
    });
    return linksContainer;
  }
};

export default Templates;

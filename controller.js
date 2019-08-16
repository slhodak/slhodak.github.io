const Controller = {
  linkProject(item, link) {
    item.addEventListener('mousedown', e => {
      window.open(link, '_blank');
    });
    return item;
  }
};

export default Controller;

const Controller = {
  addLink(element, link) {
    element.addEventListener('mousedown', e => {
      window.open(link, '_blank');
    });
  }
};

export default Controller;

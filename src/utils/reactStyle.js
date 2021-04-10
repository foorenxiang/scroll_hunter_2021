const setElementsStyle = (elementToQuery, styles) => {
  const DOMelements = document.querySelectorAll(elementToQuery);
  DOMelements.forEach((DOMelement) => {
    for (const style in styles) {
      DOMelement.style[style] = styles[style];
    }
  });
};

export { setElementsStyle };

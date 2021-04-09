const setElementsStyle = (elementToQuery, styles) => {
  const DOMelements = document.querySelectorAll(elementToQuery);
  DOMelements.forEach((DOMelement) => {
    // DOMelement.style.fontSize = '3em';
    for (const style in styles) {
      DOMelement.style[style] = styles[style];
    }
  });
};

const x = 42;

export default x;
export { setElementsStyle };

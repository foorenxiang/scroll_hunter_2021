const createGameElement = (element, id, className, innerText) => {
  const createdElement = document.createElement(element);
  id && (createdElement.id = id);
  className && (createdElement.className = className);
  innerText && (createdElement.innerText = innerText);
  return createdElement;
};

export default createGameElement;

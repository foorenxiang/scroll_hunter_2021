const createGameElement = (element, id, innerText) => {
  const createdElement = document.createElement(element);
  id && (createdElement.id = id);
  innerText && (createdElement.innerText = innerText);
  return createdElement;
};

export default createGameElement;

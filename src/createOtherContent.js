export const createOtherContent = () => {
  const list = document.querySelector('#list');
  const otherStuff = document.createElement('h2');
  otherStuff.innerText = 'Other stuff';
  list.parentElement.appendChild(otherStuff);
};

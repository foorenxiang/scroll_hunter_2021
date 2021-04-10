const createTitle = () => {
  let title = document.createElement('h1');
  title.innerText = 'Title';
  title.id = 'title';
  const body = document.querySelector('body');
  body.appendChild(title);
};

const updateTitle = () => {
  const title = document.querySelector('#title');
  title.innerText = 'Sandbox';
};

const exportFunctions = {
  createTitle,
  updateTitle,
};

export { exportFunctions };

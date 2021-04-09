export default () => {
  const body = document.querySelector('body');
  const list = document.createElement('ul');
  list.id = 'list';
  body.appendChild(list);

  const sandbox = document.createElement('li');
  sandbox.id = 'sandbox';
  sandbox.innerText = 'sandbox';
  list.appendChild(sandbox);
  const sandbox2 = document.createElement('li');
  sandbox2.id = 'sandbox2';
  sandbox2.innerText = 'yet another sandbox';
  sandbox.parentNode.appendChild(sandbox2);

  const listTitle = document.createElement('h2');
  listTitle.innerText = 'List';
  listTitle.style.color = '#FFF';
  list.parentElement.insertBefore(listTitle, list);
};

import { setGameStyles } from './GameStyles.js';
import createGameElement from './CreateGameElement.js';
import {} from './MainRenderers.js';

const renderPageSetup = () => {
  const setPageHeight = () => createGameElement('div', 'pageContainer', '', '');

  const body = document.querySelector('body');
  body.appendChild(setPageHeight());
};

const renderStaticElements = () => {
  const renderTitle = () =>
    createGameElement('header', 'title', '', 'Welcome to the scrolling game');

  const renderFooter = () =>
    createGameElement('footer', 'footer', '', "Where are you going? You've found the bottom :D");

  const pageContainer = document.querySelector('#pageContainer');
  pageContainer.prepend(renderTitle());
  pageContainer.appendChild(renderFooter());
};

const renderFoundMeElements = () => {
  const renderFoundMe = () => createGameElement('div', 'foundMe', '', 'You found me!');

  const pageContainer = document.querySelector('#pageContainer');
  pageContainer.appendChild(renderFoundMe());

  const foundMe = document.querySelector('#foundMe');

  const numberOfNodesToGenerate = Math.floor(Math.random() * 200);
  console.log(numberOfNodesToGenerate);

  const foundMeParent = foundMe.parentElement;
  let i;
  for (i = 0; i < numberOfNodesToGenerate; i++) {
    const generatedChance = Math.floor(Math.random() * 100);
    const imbalanceFactor = Math.floor(Math.random() * 15);
    if (!!(generatedChance % imbalanceFactor)) {
      foundMeParent.prepend(createGameElement('div', `filler_node_${i}`, 'fillerNode', '.'));
    } else {
      foundMeParent.appendChild(createGameElement('div', `filler_node_${i}`, 'fillerNode', '.'));
    }
  }
};

export default () => {
  renderPageSetup();
  renderFoundMeElements();
  renderStaticElements();
  setGameStyles();
};

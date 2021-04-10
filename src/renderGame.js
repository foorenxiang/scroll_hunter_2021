import { setGameStyles } from './GameStyles.js';
import createGameElement from './CreateGameElement.js';

const setPageHeight = () => createGameElement('div', 'pageContainer');

const renderTitle = () => createGameElement('header', 'title', 'You are 99% there');

const renderFooter = () =>
  createGameElement('footer', 'footer', "Where are you going? You've found the bottom :D");

const renderFoundMe = () => createGameElement('div', 'foundMe', 'You found me!');

const renderCenterAnchor = () => {
  const centerAnchor = document.createElement('div');
  centerAnchor.innerText = 'Welcome to the scrolling game';
  centerAnchor.id = 'centerAnchor';
  return centerAnchor;
};

const renderSpace = () => {};

export default () => {
  const body = document.querySelector('body');
  body.appendChild(setPageHeight());
  const pageContainer = document.querySelector('#pageContainer');
  pageContainer.appendChild(renderTitle());
  pageContainer.appendChild(renderCenterAnchor());
  pageContainer.appendChild(renderFoundMe());
  pageContainer.append(renderFooter());
  setGameStyles();
};

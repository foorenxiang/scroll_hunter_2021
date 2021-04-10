import createGameElement from './utils/createGameElement.js';
import { setGameStyles } from './GameStyles.js';

const bgMusicFile =
  'https://github.com/foorenxiang/scroll_hunter_2021/blob/master/src/backgroundMusic.mp3?raw=true';
const victoryMusicFile =
  'https://github.com/foorenxiang/scroll_hunter_2021/blob/master/src/victoryMusic.mp3?raw=true';
const backgroundMusic = new Audio(bgMusicFile);
const victoryMusic = new Audio(victoryMusicFile);

const renderPageSetup = () => {
  const setPageHeight = () => createGameElement('div', 'pageContainer', '', '');

  const body = document.querySelector('body');
  body.appendChild(setPageHeight());
};

const renderStaticElements = () => {
  const renderTitle = () =>
    createGameElement(
      'div',
      'title',
      '',
      'Welcome to Scroll Hunter! Keep scrolling till you find the secret text!'
    );

  const renderFooter = () =>
    createGameElement('footer', 'footer', '', "Where are you going? You've found the bottom :D");

  const pageContainer = document.querySelector('#pageContainer');
  pageContainer.prepend(renderTitle());
  pageContainer.appendChild(renderFooter());
};

const foundMeText = 'You found me! Tap me to win!';
const renderFoundMeElements = () => {
  const renderFoundMe = () => createGameElement('div', 'foundMe', '', foundMeText);

  const pageContainer = document.querySelector('#pageContainer');
  pageContainer.appendChild(renderFoundMe());

  const foundMe = document.querySelector('#foundMe');

  const numberOfNodesToGenerate = Math.floor(Math.random() * 200);

  const foundMeParent = foundMe.parentElement;
  let i;
  for (i = 0; i < numberOfNodesToGenerate; i++) {
    const maxNodes = 300;
    const maxImbalanceFactor = 15;
    const generatedChance = Math.floor(Math.random() * 100);
    const imbalanceFactor = Math.floor(Math.random() * maxImbalanceFactor);
    if (!!(generatedChance % imbalanceFactor)) {
      foundMeParent.prepend(createGameElement('div', `filler_node_${i}`, 'fillerNode'));
    } else {
      foundMeParent.appendChild(createGameElement('div', `filler_node_${i}`, 'fillerNode'));
    }
  }
};

const erasePage = () => {
  const body = document.querySelector('body');
  body.innerHTML = '';
};

const tapOnMe = () => {
  const foundMe = document.querySelector('#foundMe');
  const newText = 'Play again!';
  foundMe.addEventListener('click', (e) => {
    if (e.target.innerText === foundMeText) {
      backgroundMusic.pause();
      const victoryMusicPromise = victoryMusic.play();
      if (victoryMusicPromise !== undefined) {
        victoryMusicPromise.then(() => {}).catch((e) => console.log('Unable to play music'));
      }

      e.target.innerText = newText;
    } else {
      victoryMusic.pause();
      erasePage();
      fullPageRender();
    }
  });
};

export const fullPageRender = () => {
  renderPageSetup();
  renderFoundMeElements();
  renderStaticElements();
  setGameStyles();
  tapOnMe();
  const backgroundMusicPromise = backgroundMusic.play();
  if (backgroundMusicPromise !== undefined) {
    backgroundMusicPromise
      .then(() => {})
      .catch((e) => console.log('Failed to play background music on this device'));
  }
};

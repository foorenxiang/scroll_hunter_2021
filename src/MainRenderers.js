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

const renderStaticElements = () => {
  const renderTitle = () =>
    createGameElement('div', 'title', '', "Where are you going? You've found the top :D");

  const renderFooter = () =>
    createGameElement('footer', 'footer', '', "Where are you going? You've found the bottom :D");

  const pageContainer = document.querySelector('#pageContainer');
  pageContainer.prepend(renderTitle());
  pageContainer.appendChild(renderFooter());
};

const renderAnchorElements = () => {
  const renderAnchor = () =>
    createGameElement(
      'div',
      'anchor',
      '',
      'Welcome to Scroll Hunter! Keep scrolling till you find the secret text!'
    );

  const pageContainerChildCount = pageContainer.children.length;
  const anchorPosition = Math.floor(pageContainerChildCount / 2);
  pageContainer.insertBefore(renderAnchor(), pageContainer.children[anchorPosition]);

  const anchorElement = document.querySelector('#anchor');
  anchorElement.previousElementSibling.innerText = 'Scroll up? ^^^';
  anchorElement.nextElementSibling.innerText = 'Scroll down? VVV';
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
      playVictoryMusic();
      e.target.innerText = newText;
    } else {
      victoryMusic.pause();
      erasePage();
      fullPageRender();
    }
  });
};

const playBackgroundMusic = () => {
  const backgroundMusicPromise = backgroundMusic.play();
  if (backgroundMusicPromise !== undefined) {
    backgroundMusicPromise
      .then(() => {})
      .catch((e) => console.log('Unable to play music on this device'));
  }
};

const playVictoryMusic = () => {
  const victoryMusicPromise = victoryMusic.play();
  if (victoryMusicPromise !== undefined) {
    victoryMusicPromise
      .then(() => {})
      .catch((e) => console.log('Unable to play music on this device'));
  }
};

const scrollToAnchor = () => {
  location.href = '#';
  location.href = `#${document.querySelector('#anchor').previousElementSibling.id}`;
};

export const fullPageRender = () => {
  renderPageSetup();
  renderFoundMeElements();
  renderStaticElements();
  renderAnchorElements();
  setGameStyles();
  playBackgroundMusic();
  tapOnMe();
  scrollToAnchor();
};

import { setElementsStyle } from './utils/reactStyle.js';
const dev = false;
const devPageHeight = window.innerHeight * 0.9;
const prodPageHeight = window.innerHeight * 30;

const defaultBackgroundColor = '#333';

const gameStyles = () => {
  const styles = {
    body: { backgroundColor: '#777', color: 'white', padding: 0, margin: 0 },
    '#pageContainer': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      fontSize: '2em',
      padding: '0.25em 0',
      backgroundColor: 'black',
      color: 'white',
      height: `${dev ? devPageHeight : prodPageHeight}px`,
    },
    '#pageContainer > *': {
      backgroundColor: defaultBackgroundColor,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: 1,
    },
    '#foundMe': {
      flexGrow: 0,
      backgroundColor: 'red',
      fontSize: '1em',
    },
    '.fillerNode': {
      color: defaultBackgroundColor,
    },
    footer: {
      backgroundColor: defaultBackgroundColor,
    },
  };
  const foundMe = document.querySelector('#foundMe');
  const foundMePreviousSibling = `#${foundMe?.previousElementSibling?.id}`;
  const foundMeNextSibling = `#${foundMe?.nextElementSibling?.id}`;
  foundMePreviousSibling &
    (styles[foundMePreviousSibling] = {
      background:
        'rgb(51,51,51) linear-gradient(180deg, rgba(51,51,51,1) 0%, rgba(51,51,51,1) 30%, rgba(255,0,0,1) 100%)',
    });
  foundMeNextSibling &
    (styles[foundMeNextSibling] = {
      background:
        'rgb(51,51,51) linear-gradient(0deg, rgba(51,51,51,1) 0%, rgba(51,51,51,1) 30%, rgba(255,0,0,1) 100%)',
    });
  return styles;
};

export const setGameStyles = () => {
  const styles = gameStyles();
  for (const selector in styles) {
    setElementsStyle(selector, styles[selector]);
  }
};

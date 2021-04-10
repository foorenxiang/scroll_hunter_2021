import { setElementsStyle } from './utils/reactStyle.js';
const dev = false;
const devPageHeight = window.innerHeight * 0.9;
const prodPageHeight = window.innerHeight * 200;

const gameStyles = () => {
  const defaultBackgroundColor = '#333';
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
      color: '#505050',
      fontSize: '0.5em',
    },
    '#title': {
      flexGrow: 0,
      padding: '20px 0',
    },
    '#anchor': {
      flexGrow: 0,
      padding: '100px 0',
    },
  };
  styles['footer'] = styles['#title'];
  styles[`#${document.querySelector('#anchor').previousElementSibling?.id}`] = styles['#anchor'];
  styles[`#${document.querySelector('#anchor').nextElementSibling?.id}`] = styles['#anchor'];

  return styles;
};

export const setGameStyles = () => {
  const styles = gameStyles();
  for (const selector in styles) {
    setElementsStyle(selector, styles[selector]);
  }
};

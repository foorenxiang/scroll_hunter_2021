import { setElementsStyle } from './utils/reactStyle.js';
const dev = true;
const devPageHeight = window.innerHeight * 0.9;
const prodPageHeight = window.innerHeight * 30;

const defaultBackgroundColor = '#333';
export const gameStyles = {
  body: { backgroundColor: '#777', color: 'white', padding: 0, margin: 0 },
  '#pageContainer': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    fontSize: '2em',
    padding: '0.25em 2vw',
    backgroundColor: 'black',
    color: 'white',
    height: `${dev ? devPageHeight : prodPageHeight1}px`,
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
  },
  '#foundMe ~ *': {
    backgroundColor: 'green',
  },
  footer: {
    backgroundColor: defaultBackgroundColor,
  },
};

export const setGameStyles = () => {
  for (const selector in gameStyles) {
    setElementsStyle(selector, gameStyles[selector]);
  }
};

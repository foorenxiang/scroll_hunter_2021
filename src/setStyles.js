import { setElementsStyle } from './utils/reactStyle.js';

export default function () {
  setElementsStyle('div', {
    color: 'blue',
    fontSize: '1.5em',
  });

  setElementsStyle('*', {
    color: 'white',
  });
}

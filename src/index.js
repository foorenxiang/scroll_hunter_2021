'use strict';

// note that js extension is required for browser
import { exportFunctions } from './Title.js';
import renderGame from './renderGame.js';

// deeply destructuring/nested destructuring does not work for imports!
// const { createTitle, updateTitle } = exportFunctions;

renderGame();

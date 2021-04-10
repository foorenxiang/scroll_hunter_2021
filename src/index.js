'use strict';

// note that js extension is required for browser
import styleBody from './styleBody.js';
import createList from './createList.js';
import { exportFunctions } from './Title.js';
import { createOtherContent } from './createOtherContent.js';
import { automaticallyGeneratingListOfPeople } from './generatingListOfPeople.js';
import setStyles from './setStyles.js';
import renderGame from './renderGame.js';

// deeply destructuring/nested destructuring does not work for imports!
const { createTitle, updateTitle } = exportFunctions;

// createTitle();
// updateTitle();
// styleBody();
// createList();
// createOtherContent();
// automaticallyGeneratingListOfPeople();
// setStyles();
renderGame();

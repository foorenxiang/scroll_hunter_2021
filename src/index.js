'use strict';

// note that js extension is required for browser
import { fullPageRender } from './MainRenderers.js';

const setPageTitle = () => {
  document.title = 'Scroll Hunter 2021';
};

setPageTitle();
fullPageRender();

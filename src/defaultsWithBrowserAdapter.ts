import defaults from './defaults.js';
import BrowserAdapter from './adapter/BrowserAdapter.js';

defaults.adapter = new BrowserAdapter();

export default defaults;

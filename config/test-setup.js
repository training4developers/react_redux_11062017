// This file is loaded via Jest configuration options
// in the package.json file

// "jest": {
//   ... more configuration options
//   "setupFiles": [
//     "./config/test-setup.js"
//   ],
//   ... more configuration options
// }

// the .babelrc file in this folder ensures Babel will properly
// process this file for Jest before executing it

import './temp-polyfills';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// configure Enzyme to work with React 16
// http://airbnb.io/enzyme/docs/installation/index.html

configure({ adapter: new Adapter() });
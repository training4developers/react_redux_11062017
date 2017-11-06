// needed for React 16 unit testing
// removal of this polyfill should be possible with
// future releases of React 16

// for more information: https://github.com/facebookincubator/create-react-app/issues/3199

global.requestAnimationFrame = (cb) => {
  setTimeout(cb, 0);
};
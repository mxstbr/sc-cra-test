const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
  // config = injectBabelPlugin('babel-plugin-styled-components', config);
  config = injectBabelPlugin('babel-plugin-emotion', config);
  return config;
}

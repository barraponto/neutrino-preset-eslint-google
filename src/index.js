const lint = require('neutrino-middleware-eslint');
const merge = require('deepmerge');

module.exports = (neutrino, options = {}) => {
  neutrino.use(lint, merge.all([
    {
      eslint: {
        baseConfig: {
          extends: ['eslint:recommended', 'google']
        }
      }
    },
    options,
    (!options.include && !options.exclude) ?
      { include: [neutrino.options.source], exclude: [neutrino.options.static] } :
      {}
  ]));
};

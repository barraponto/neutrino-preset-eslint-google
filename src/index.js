const lint = require('neutrino-middleware-eslint');
const merge = require('deepmerge');

module.exports = (neutrino, options = {}) => {
  const recommended = (options.recommended === undefined) ? true : options.recommended;
  neutrino.use(lint, merge.all([
    { eslint: { baseConfig: { extends: (recommended) ? ['eslint:recommended'] : [] } } },
    { eslint: { baseConfig: { extends: ['google'] } } },
    options,
    (!options.include && !options.exclude) ?
      { include: [neutrino.options.source], exclude: [neutrino.options.static] } :
      {}
  ]));
};

const lint = require('neutrino-middleware-eslint');
const merge = require('deepmerge');

module.exports = (neutrino, options) => {
  neutrino.use(lint, merge({
    eslint: {
      baseConfig: {
        extends: ['eslint:recommended', 'google']
      }
    }
  }, options));

  if (!options.include && !options.exclude) {
    neutrino.config.module.rule('lint')
      .include.add(neutrino.options.source);
  }
};

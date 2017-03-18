const lint = require('neutrino-lint-base');
const merge = require('deepmerge');

module.exports = neutrino => {
  lint(neutrino);
  neutrino.config.module
    .rule('lint')
    .loader('eslint', props => merge(props, {
      options: {
        baseConfig: {
          extends: ['eslint:recommended', 'google'],
        },
      },
    }));
};

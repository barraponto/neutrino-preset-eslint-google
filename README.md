# Neutrino preset with ESLint Google configuration
[![NPM version][npm-image]][npm-url] [![NPM downloads][npm-downloads]][npm-url] [![Join Slack][slack-image]][slack-url]

`neutrino-preset-eslint-google` is a Neutrino preset that supports linting
JavaScript projects with Google's base ESLint config, following the 
[Google styleguide](https://google.github.io/styleguide/jsguide.html).

## Documentation

Install this preset to your development dependencies, then set it in
`.neutrinorc.js`:

```javascript
  module.exports = {
    use: [
      "neutrino-preset-eslint-google",
      "neutrino-preset-web",
    ],
    ...
  };
```

The preset will enable `eslint:recommended` rules by default. To disable them,
set the `recommended` option to false:

```javascript
  module.exports = {
    use: [
      ["neutrino-preset-eslint-google", {recommended: false}],
      "neutrino-preset-web",
    ],
    ...
  };
```


[npm-image]: https://img.shields.io/npm/v/neutrino-preset-eslint-google.svg
[npm-downloads]: https://img.shields.io/npm/dt/neutrino-preset-eslint-google.svg
[npm-url]: https://npmjs.org/package/neutrino-preset-eslint-google
[slack-image]: https://neutrino-slack.herokuapp.com/badge.svg
[slack-url]: https://neutrino-slack.herokuapp.com/

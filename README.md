# Neutrino preset with ESLint Google configuration

[![Greenkeeper badge](https://badges.greenkeeper.io/barraponto/neutrino-preset-eslint-google.svg)](https://greenkeeper.io/)
[![NPM version][npm-image]][npm-url] [![NPM downloads][npm-downloads]][npm-url] [![Join Slack][slack-image]][slack-url]

`neutrino-preset-eslint-google` is a Neutrino preset that supports linting
JavaScript projects with Google's base ESLint config, following the 
[Google styleguide](http://google.github.io/styleguide/javascriptguide.xml).

## Documentation

Install this preset to your development dependencies, then set it in
`package.json`:

```json
  "neutrino": {
    "use": [
      "neutrino-preset-eslint-google",
      "neutrino-preset-web",
    ]
  },
```

This preset doesn't depend on `neutrino-preset-web`, but it doesn't introduce
any entry points on its own.

## Neutrino 4

Neutrino v4 is supported by the earlier release of this preset.
Please consider updating to Neutrino 5.

[npm-image]: https://img.shields.io/npm/v/neutrino-preset-eslint-google.svg
[npm-downloads]: https://img.shields.io/npm/dt/neutrino-preset-eslint-google.svg
[npm-url]: https://npmjs.org/package/neutrino-preset-eslint-google
[slack-image]: https://neutrino-slack.herokuapp.com/badge.svg
[slack-url]: https://neutrino-slack.herokuapp.com/

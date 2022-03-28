/* eslint-disable no-param-reassign */
const path = require('path');

const pack = process.env.PACKAGE ;


if (!pack) {
  console.error('!env.PACKAGE')
  throw '!env.PACKAGE'
}

module.exports = {
  stories: [
    `../../packages/${pack}/stories/**/*.@(story|stories).@(js|jsx|ts|tsx|mdx)`,
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  webpackFinal: async (config) => {
    const cwd = process.cwd();
    config.resolve.alias = {
      ...config.resolve.alias,
      '@emotion/core': path.join(cwd, 'node_modules', '@emotion', 'react'),
      '@emotion/styled': path.join(cwd, 'node_modules', '@emotion', 'styled'),
      '@emotion/styled-base': path.join(cwd, 'node_modules', '@emotion', 'styled'),
      'emotion-theming': path.join(cwd, 'node_modules', '@emotion', 'react'),
      'core-js/modules/es6.object.keys': path.resolve(
        cwd,
        'node_modules/core-js/modules/es.object.keys',
      ),
      'core-js/modules/es7.object.get-own-property-descriptors': path.resolve(
        cwd,
        'node_modules/core-js/modules/es.object.get-own-property-descriptors',
      ),
      'core-js/modules/web.dom.iterable': path.resolve(
        cwd,
        'node_modules/core-js/modules/web.dom-collections.iterator.js',
      ),
      'core-js/modules': path.resolve(
        cwd,
        'node_modules/core-js/modules',
      ),
    };

    return config;
  },
};

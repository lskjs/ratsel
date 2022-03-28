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
    '@storybook/addon-postcss',
  ],
};

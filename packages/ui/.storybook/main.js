const path = require('path');
const resolvePath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: ['../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: 'storybook-preset-less',
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: { '@base-color': '#F24851' },
          },
        },
      },
    },
    '@storybook/preset-scss',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          include: [path.resolve(__dirname, '../src')],
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false },
        },
      },
    },
  ],
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  babel: async (options) => ({
    ...options,
    presets: [...options.presets, '@emotion/babel-preset-css-prop'],
    plugins: [
      ...options.plugins,
      [
        '@emotion',
        {
          // sourceMap is on by default but source maps are dead code eliminated in production
          sourceMap: true,
          autoLabel: 'dev-only',
          labelFormat: '[local]',
          cssPropOptimization: true,
        },
      ],
    ],
    // any extra options you want to set
  }),
  webpackFinal: async (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@emotion/core': resolvePath('../../node_modules/@emotion/react'),
        '@emotion/styled': resolvePath('../../node_modules/@emotion/styled'),
        'emotion-theming': resolvePath('../../node_modules/@emotion/react'),
      },
    },
  }),
};

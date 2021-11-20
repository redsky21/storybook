module.exports = (api) => {
  api.cache(true);
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: 'commonjs',
          bugfixes: true,
          modules: false,
        },
      ],
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
    plugins: [
      ['@emotion'],
      ['@babel/plugin-transform-modules-commonjs', { strictMode: false }],
      // any package needs to declare 7.4.4 as a runtime dependency. default is ^7.0.0
      // ['@babel/plugin-transform-runtime', { version: '^7.4.4', useESModules: true }],
      ['@babel/plugin-transform-runtime'],
    ],
    ignore: [/@babel[\\|/]runtime/], // Fix a Windows issue.
  };
};

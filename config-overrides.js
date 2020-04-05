const { addBabelPlugin, override } = require('customize-cra');

module.exports = override(
  // instalar os plugins que quer usar nesse caso o yarn add babel-plugin-root-import -D
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src',
    },
  ])
);

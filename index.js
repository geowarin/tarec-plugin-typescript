const path = require('path');

module.exports = function sassPlugin (context, operations) {

  operations.commands.modify('build')
    .before(context => {

      context.webpackConfig.module.loaders.push({
        test: /\.tsx?$/,
        loader: 'babel!ts',
        exclude: /node_modules/,
        include: path.join(context.projectDir, 'src')
      });
    });

  operations.commands.modify('start')
    .before(context => {
      context.webpackConfig.module.loaders.push({
        test: /\.tsx?$/,
        loader: 'babel!ts',
        exclude: /node_modules/,
        include: path.join(context.projectDir, 'src')
      });
    });
};
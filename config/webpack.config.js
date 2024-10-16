'use strict';
import { merge } from 'webpack-merge';
import common from './webpack.common.js';
import PATHS from './paths.js';

// Merge webpack configuration files
const config = (env, argv) =>
  merge(common, {
    entry: {
      popup: PATHS.src + '/popup.js',
      contentScript: PATHS.src + '/contentScript.js',
      background: PATHS.src + '/background.js',
      db: PATHS.src + '/db.js',
    },
    devtool: argv.mode === 'production' ? false : 'source-map',
  });

export default config;

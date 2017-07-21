var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
  plugins: [
    autoprefixer({ /* ...options */ }),
    precss(),
  ],
};

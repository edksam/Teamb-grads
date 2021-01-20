const graduates = require('./graduates/graduates.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(graduates);
};

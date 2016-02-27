var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    db: 'mongodb://localhost/interval-trainer',
    rootPath: rootPath,
    port: process.env.PORT || 3030
  },
  production: {
    rootPath: rootPath,
    db: 'mongodb://jeffboulay:D3signd3pt462@ds011298.mongolab.com:11298/interval-trainer',
    port: process.env.PORT || 80
  }
}

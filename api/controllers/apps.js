const data = require('../../data/apps.json');
exports.getAll = (req, res) => {

  res.json({results: data});
}
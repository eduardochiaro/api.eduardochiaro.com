const data = require('../../data/jobs.json');
exports.getAll = (req, res) => {

  res.json({results: data});
}
'use strict';
const auth = require('./middlewares/auth');
const work = require('./controllers/work');
const apps = require('./controllers/apps');
const github = require('./controllers/github');

module.exports = function(app) {

  app.get('/', (req, res) => {
    res.json({result: true});
  });

  app.get('/work', work.getAll);
  app.get('/apps', apps.getAll);
  app.get('/github', github.getAll);
};
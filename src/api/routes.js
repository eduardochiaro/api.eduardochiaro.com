'use strict';

import auth from './middlewares/auth';
import work from './controllers/work';
import apps from './controllers/apps';
import github from './controllers/github';

export default function(app) {
  app.get('/', (req, res) => {
    res.json({result: true});
  });

  app.get('/work', work.getAll);
  app.get('/apps', apps.getAll);
  app.get('/github', github.getAll);
};
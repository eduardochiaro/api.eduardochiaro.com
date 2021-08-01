'use strict';

import auth from './middlewares/auth';
import work from './controllers/portfolio/work';
import apps from './controllers/portfolio/apps';
import github from './controllers/portfolio/github';
import stream from './controllers/stream/stream';

export default function(app) {
  app.get('/', (req, res) => {
    res.json({result: true});
  });

  app.get('/portfolio/work', work.getAll);
  app.get('/portfolio/apps', apps.getAll);
  app.get('/portfolio/github', github.getAll);
  app.get('/stream/latest', stream.getLastest);
};
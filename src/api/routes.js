'use strict';

import auth from './middlewares/auth';
import work from './controllers/portfolio/work';
import apps from './controllers/portfolio/apps';
import github from './controllers/portfolio/github';
import skills from './controllers/portfolio/skills';
import stream from './controllers/stream/stream';
import { generateAccessToken } from './controllers/access/new';

export default function(app) {
  app.get('/', (req, res) => {
    res.json({result: true});
  });

  app.get('/portfolio/work', auth, work.getAll);
  app.get('/portfolio/apps', auth, apps.getAll);
  app.get('/portfolio/github', auth, github.getAll);
  app.get('/portfolio/skills', auth, skills.getAll);
  app.get('/stream/latest', auth, stream.getLastest);

  app.post('/access/new', (req, res) => {
    const token = generateAccessToken({ username: req.body.username });
    res.json(token);
  });
};
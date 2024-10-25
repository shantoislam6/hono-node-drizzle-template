import { Hono } from 'hono';
import { serveStatic } from '@hono/node-server/serve-static';
import router from './routers/routes.js';

import { logger } from 'hono/logger';

// Create root app
const app = new Hono();

// log requests in development mode
if (process.env.MODE === 'development') {
  app.use(logger());
}

// Serve static files
app.use('/static/*', serveStatic({ root: './' }));

// Inject routes
app.route('/', router);

export default app;

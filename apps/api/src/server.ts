import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import { router } from 'express-file-routing';
import ViteExpress from 'vite-express';

dotenv.config({ override: true });

const app = express();

app.use(cors());
app.disable('x-powered-by');

(async () => {
  app.use(
    '/stripe/webhook',
    express.raw({ type: 'application/json' }),
    await router()
  );

  app.use('/', express.json({ limit: '1mb' }), await router());

  ViteExpress.listen(app, 4784, () =>
    console.log('Server is listening on port 4784...')
  );
})();

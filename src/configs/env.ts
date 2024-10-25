import path from 'node:path';
import dotenv from 'dotenv';
dotenv.config({
  path: [path.resolve('.env.production'), path.resolve('.env'), path.resolve('.env.development')],
  override: true,
});

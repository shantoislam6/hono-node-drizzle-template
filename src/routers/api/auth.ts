import { Hono } from 'hono';

import { githubAuth } from '@hono/oauth-providers/github';
import { googleAuth } from '@hono/oauth-providers/google';

type Env = {
  Variables: {
    token: object;
    'user-github': object;
    'granted-scopes': object;
    'user-google': object;
  };
};

const auth = new Hono<Env>();

auth.get(
  '/google',
  googleAuth({
    client_id: `Deno.env.get('GOOGLE_ID')`,
    client_secret: `Deno.env.get('GOOGLE_SECRET')`,
    scope: ['openid', 'email', 'profile'],
  }),
  (c) => {
    const token = c.get('token');
    const grantedScopes = c.get('granted-scopes');
    const user = c.get('user-google');

    return c.json({
      token,
      grantedScopes,
      user,
    });
  }
);

auth.get(
  '/github',
  githubAuth({
    client_id: process.env.GITHUB_ID,
    client_secret: process.env.GITHUB_SECRET,
  }),
  (c) => {
    const url = new URL(c.req.url);
    console.log(url.searchParams.get('code'));

    // const token = c.get('token');
    // const user = c.get('user-github');
    return c.json({});
  }
);

export default auth;
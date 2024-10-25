import { Hono } from "hono";

const web = new Hono();

web.get("/", (c) => {
  return c.html(
    <html lang="en"  >
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>T2Site</title>
      </head>
      <body>
        <h1>Welcome to from T2Site Server</h1>
        {/* <script type="module" src="/public/"></script> */}
        <script dangerouslySetInnerHTML={{
          __html: `console.log('Hello World')`
        }} />
      </body>
    </html>,
  );
});

export default web;

#!/usr/bin/env node

import './configs/env.js';

import { serve } from '@hono/node-server';
import app from './app.js';

import { injectWebSocket } from './routers/sockets/ws.js';
import { dbAuthenticate } from './databases/index.js';
import dayjs from "dayjs";
import redis from "./lib/redis.js";

// Get the port from the environment or use 7000
const PORT = process.env.PORT || 7000;

// A function that initializes the server
async function init() {
  console.log(`Environment ${process.env.MODE}`);

  dbAuthenticate()
    .then((time) => {
      console.log('Postgres connected successfully at ' + dayjs(time).format('HH:mm A MMMM DD, YYYY'));
      // Start the server
      redis.get('/').then((data)=>{
        console.log('Connected to Redis');
        const server = serve(
          {
            fetch: app.fetch,
            port: PORT as number,
          },
          (info) => {
            console.log('Server is running on port', info.port);
            console.log(`http://localhost:${info.port}`);
            console.log(`http://127.0.0.1:${info.port}`);
          }
        );
  
        // inject websocket
        injectWebSocket(server);
      });

      
    })
    .catch((err) => console.log(err));
}

// Run the server
init();

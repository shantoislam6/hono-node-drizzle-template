import { Hono } from 'hono';
import { createNodeWebSocket } from "@hono/node-ws";
import { WSContext } from "hono/ws";

const ws = new Hono();

const {injectWebSocket, upgradeWebSocket} = createNodeWebSocket({ app: ws });

const connections = new Map<string, WSContext<unknown>>();
let id = 0;
// Example connection 1
ws.get('/c1', upgradeWebSocket((c)=>{
  console.log('ws context', c.req.url);
  id++;
  return {
    onOpen: (event, ws)=>{
      console.log('conntect 1');
      connections.set(`${id}`, ws);
    },
  }
}))



export { injectWebSocket };
export default ws;
import { Hono } from 'hono';
import web from './web/web.js';
import api from './api/api.js';
import ws from "./sockets/ws.js";

const route = new Hono();

route.route('/', web);
route.route('/api', api);
route.route('/ws', ws);

export default route;

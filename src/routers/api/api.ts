import { Hono } from 'hono';
import auth from "./auth.js";
const api = new Hono()

api.route('/auth', auth);

export default api;
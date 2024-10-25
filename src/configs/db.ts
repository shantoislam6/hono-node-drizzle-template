export const dbCredentials = {
  host: String(process.env.DB_HOST),
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: String(process.env.DB_NAME),
};

// Make sure to install the 'pg' package
import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
import { sql } from 'drizzle-orm';


const { Pool } = pg

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle({ client: pool });

export function dbAuthenticate(): Promise<Date> {
  return new Promise((resolve, reject) => {
    db.execute(sql`SET TIMEZONE='UTC';`)
      .then((res) => {
        console.log('Database Time zone set to UTC');
        resolve(new Date());
      })
      .catch((err) => {
        console.error('Error setting time zone:', err);
        reject(err);
      });
  });
}

export default db;
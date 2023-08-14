import dotenv from 'dotenv'

dotenv.config()

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
  client: process.env.DB_CLIENT,
  connection: {
    connectionString: process.env.DB_CONNECTION_STRING
  },
  pool: {
    min: 0,
    max: 10
  },
  migrations: {
    tableName: '_knex_migrations',
    directory: 'knex/migrations'
  },
  seeds: {
    directory: 'knex/seeds'
  }
}

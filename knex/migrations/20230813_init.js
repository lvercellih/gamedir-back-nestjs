/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema
    .createTable('game', t => {
      t.string('id').primary()
      t.string('title')
      t.string('description')
      t.dateTime('creation_dt')
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema
    .dropTableIfExists('game')
}

export const config = {
  transaction: false
}

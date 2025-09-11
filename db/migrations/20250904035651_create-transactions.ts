import type { Knex } from "knex";

// Método UP: o que a migration vai fazer
export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('transactions', (table) => {
        table.uuid('id').primary() // universal unique id
        table.text('title').notNullable()
        table.decimal('amount', 10, 2).notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
    })
}

// Método DOWN: Faz o oposto que o método UP fez (Rollback)
export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('transactions')
}


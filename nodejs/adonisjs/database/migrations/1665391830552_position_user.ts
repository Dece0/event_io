import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'position_user'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .integer('position_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('positions')
        .onDelete('CASCADE')
      table
        .integer('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
      table.primary(['position_id', 'user_id'])
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

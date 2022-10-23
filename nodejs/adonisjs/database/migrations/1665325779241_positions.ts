import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { SexPreference } from 'App/Types/types'

export default class extends BaseSchema {
  protected tableName = 'positions'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title', 150).notNullable()
      table.string('description', 255).notNullable()
      table
        .enum('sex_preference', Object.values(SexPreference), {
          useNative: true,
          enumName: 'sex_preference',
          existingType: false,
        })
        .notNullable()
      table.decimal('salary', 4, 2).notNullable()
      table.tinyint('max_employees').notNullable()
      table.timestamp('from').notNullable()
      table.timestamp('to').notNullable()
      table
        .integer('event_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('events')
        .onDelete('CASCADE')
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

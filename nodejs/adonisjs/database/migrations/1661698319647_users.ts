import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { Sex, UserRole } from 'App/Types/types'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .enum('role', Object.values(UserRole), {
          useNative: true,
          enumName: 'user_role',
          existingType: false,
        })
        .notNullable()
      table
        .enum('sex', Object.values(Sex), {
          useNative: true,
          enumName: 'user_sex',
          existingType: false,
        })
        .notNullable()
      table.string('first_name', 100).notNullable()
      table.string('last_name', 100).notNullable()
      table.string('email', 255).notNullable().unique()
      table.string('phone', 13).notNullable().unique()
      table.date('birthdate').notNullable()
      table.string('password', 180).notNullable()
      table.string('remember_me_token').nullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

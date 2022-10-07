import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'events'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title', 150).notNullable()
      table.string('description', 255).notNullable()
      table.boolean('is_private').notNullable()
      table.string('image_url').nullable()
      table.string('location').notNullable()
      table.timestamp('from').notNullable()
      table.timestamp('to').notNullable()
      table.integer('created_by').notNullable().unsigned().references('id').inTable('users')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

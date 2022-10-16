import {
  afterFind,
  BaseModel,
  belongsTo,
  BelongsTo,
  column,
  manyToMany,
  ManyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Event from './Event'
import User from './User'

export default class Position extends BaseModel {
  public serializeExtras() {
    return {
      registeredEmployees: this.$extras.registeredEmployees,
    }
  }

  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public description: string

  @column()
  public salary: number

  @column({ columnName: 'max_employees', serializeAs: 'maxEmployees' })
  public maxEmployees: number

  @column.dateTime()
  public from: DateTime

  @column.dateTime()
  public to: DateTime

  @column({ columnName: 'event_id', serializeAs: 'eventId' })
  public eventId: number

  @belongsTo(() => Event, { foreignKey: 'eventId' })
  public event: BelongsTo<typeof Event>

  @manyToMany(() => User, {
    pivotTimestamps: true,
  })
  public employees: ManyToMany<typeof User>

  @column.dateTime({ autoCreate: true, columnName: 'created_at', serializeAs: 'createdAt' })
  public createdAt: DateTime

  @column.dateTime({
    autoCreate: true,
    autoUpdate: true,
    columnName: 'updated_at',
    serializeAs: 'updatedAt',
  })
  public updatedAt: DateTime
}

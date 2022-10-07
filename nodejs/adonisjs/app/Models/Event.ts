import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Event extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public description: string

  @column({
    columnName: 'is_private',
    serializeAs: 'isPrivate',
    serialize: (value: number) => {
      return value === 1 ? true : false
    },
  })
  public isPrivate: boolean

  @column({ columnName: 'image_url', serializeAs: 'imageUrl' })
  public imageUrl: string | null

  @column()
  public location: string

  @column.dateTime()
  public from: DateTime

  @column.dateTime()
  public to: DateTime

  @column({ columnName: 'created_by', serializeAs: 'createdBy' })
  public createdBy: number

  @belongsTo(() => User, { foreignKey: 'createdBy' })
  public creator: BelongsTo<typeof User>

  @column.dateTime({ columnName: 'created_at', autoCreate: true, serializeAs: 'createdAt' })
  public createdAt: DateTime

  @column.dateTime({
    columnName: 'updated_at',
    autoCreate: true,
    autoUpdate: true,
    serializeAs: 'updatedAt',
  })
  public updatedAt: DateTime
}

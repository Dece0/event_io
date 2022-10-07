import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { BaseModel, column, beforeSave, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import { Sex, UserRole } from 'App/Types/types'
import Event from './Event'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public role: UserRole

  @column()
  public sex: string

  @column({ columnName: 'first_name', serializeAs: 'firstName' })
  public firstName: string

  @column({ columnName: 'last_name', serializeAs: 'lastName' })
  public lastName: string

  @column()
  public email: string

  @column()
  public phone: string

  @column.date()
  public birthdate: DateTime

  @column({ serializeAs: null })
  public password: string

  @hasMany(() => Event, {
    foreignKey: 'created_by',
  })
  public events: HasMany<typeof Event>

  @column.dateTime({ columnName: 'created_at', autoCreate: true, serializeAs: 'createdAt' })
  public createdAt: DateTime

  @column.dateTime({
    columnName: 'updated_at',
    autoCreate: true,
    autoUpdate: true,
    serializeAs: 'updatedAt',
  })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}

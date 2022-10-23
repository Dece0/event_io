import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import { UserRole } from 'App/Types/types'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        firstName: 'David',
        lastName: 'Cabada',
        email: 'david@gmail.com',
        phone: '+421949000000',
        sex: 'male',
        birthdate: DateTime.utc(1996, 5, 5),
        password: 'hehe',
        role: UserRole.ADMINISTRATOR,
      },
      {
        firstName: 'Martin',
        lastName: 'Svoradov',
        email: 'svoradov@gmail.com',
        phone: '+421949000111',
        sex: 'male',
        birthdate: DateTime.utc(1997, 1, 5),
        password: 'hehe',
        role: UserRole.ORGANIZER,
      },
    ])
  }
}

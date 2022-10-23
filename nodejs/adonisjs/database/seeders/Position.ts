import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Position from 'App/Models/Position'
import { SexPreference } from 'App/Types/types'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  public async run() {
    await Position.createMany([
      {
        title: 'Barman',
        description: 'Čapovanie piva a obsluha baru',
        sexPreference: SexPreference.NONE,
        salary: 8.5,
        maxEmployees: 10,
        from: DateTime.utc(2022, 11, 1, 16, 0),
        to: DateTime.utc(2022, 11, 2, 6, 0),
        eventId: 1,
      },
      {
        title: 'SBS',
        description: 'Kontrola lístkov pri vstupe na podujatie',
        sexPreference: SexPreference.MALE,
        salary: 6.75,
        maxEmployees: 5,
        from: DateTime.utc(2022, 11, 1, 15, 0),
        to: DateTime.utc(2022, 11, 2, 7, 0),
        eventId: 1,
      },
      {
        title: 'SBS',
        description: 'Kontrola lístkov pri vstupe na podujatie',
        sexPreference: SexPreference.MALE,
        salary: 5.5,
        maxEmployees: 20,
        from: DateTime.utc(2022, 11, 20, 16, 0),
        to: DateTime.utc(2022, 11, 21, 3, 0),
        eventId: 2,
      },
      {
        title: 'Hosteska',
        description: 'Rozdávanie welcome drinkov',
        sexPreference: SexPreference.FEMALE,
        salary: 6.5,
        maxEmployees: 5,
        from: DateTime.utc(2022, 11, 30, 17, 0),
        to: DateTime.utc(2022, 11, 30, 22, 0),
        eventId: 3,
      },
      {
        title: 'Stavanie pódia',
        description: 'Montácia, údržba a následna demontácia pódia',
        sexPreference: SexPreference.MALE,
        salary: 5.0,
        maxEmployees: 20,
        from: DateTime.utc(2022, 11, 30, 8, 0),
        to: DateTime.utc(2022, 12, 1, 1, 0),
        eventId: 3,
      },
      {
        title: 'Hosteska',
        description: 'Rozdávanie welcome drinkov',
        sexPreference: SexPreference.FEMALE,
        salary: 7.55,
        maxEmployees: 12,
        from: DateTime.utc(2022, 12, 1, 8, 0),
        to: DateTime.utc(2022, 12, 1, 16, 0),
        eventId: 4,
      },
      {
        title: 'Hosteska',
        description: 'Rozdávanie welcome drinkov',
        sexPreference: SexPreference.FEMALE,
        salary: 8.25,
        maxEmployees: 8,
        from: DateTime.utc(2022, 12, 2, 9, 0),
        to: DateTime.utc(2022, 12, 2, 19, 30),
        eventId: 5,
      },
      {
        title: 'SBS',
        description: 'Kontrola lístkov pri vstupe na podujatie',
        sexPreference: SexPreference.MALE,
        salary: 5,
        maxEmployees: 20,
        from: DateTime.utc(2022, 12, 10, 18, 0),
        to: DateTime.utc(2022, 12, 10, 22, 0),
        eventId: 6,
      },
      {
        title: 'Barman',
        description: 'Obsluha a údržba baru a miešanie drinkov',
        sexPreference: SexPreference.NONE,
        salary: 8.5,
        maxEmployees: 10,
        from: DateTime.utc(2022, 12, 10, 17, 0),
        to: DateTime.utc(2022, 12, 11, 2, 0),
        eventId: 6,
      },
    ])
  }
}

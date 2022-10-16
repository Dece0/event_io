import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Position from 'App/Models/Position'
import AddEmployeeValidator from 'App/Validators/AddEmployeeValidator'

export default class EmployeesController {
  public async store({ params, request, response }: HttpContextContract) {
    const eventId = params.event_id
    const positionId = params.position_id

    const position = await Position.query()
      .where('id', '=', positionId)
      .andWhere('event_id', '=', eventId)
      .first()

    if (!position) {
      return response.notFound({ message: 'Position not found' })
    }

    const { userIds } = await request.validate(AddEmployeeValidator)

    // const positionUsers = await Database.from('position_user')
    //   .select('*')
    //   .where('position_id', '=', positionId)
    //   .andWhere('user_id', 'in', userIds)

    // if (positionUsers) {
    //   return response.conflict({ message: 'One or more users are already registred' })
    // }

    await position.related('employees').sync(userIds, false)

    return response.json(position)
  }

  public async destroy({ params, response }: HttpContextContract) {
    const eventId = params.event_id
    const positionId = params.position_id
    const userId = params.user_id

    const position = await Position.query()
      .where('id', '=', positionId)
      .andWhere('event_id', '=', eventId)
      .first()

    if (!position) {
      return response.notFound({ message: 'Position not found' })
    }

    // const positionUser = await Database.from('position_user')
    //   .select('*')
    //   .where('position_id', '=', positionId)
    //   .andWhere('user_id', '=', userId)
    //   .first()

    // if (positionUser) {
    //   return response.conflict({ message: 'User is already registred' })
    // }

    await position.related('employees').detach([userId])
  }
}

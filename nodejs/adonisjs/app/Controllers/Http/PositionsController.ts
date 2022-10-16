import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Event from 'App/Models/Event'
import Position from 'App/Models/Position'
import CreatePositionValidator from 'App/Validators/CreatePositionValidator'

export default class PositionsController {
  public async index({ params, response }: HttpContextContract) {
    const eventId = params.event_id
    const positions = await Position.query()
      .where('event_id', '=', eventId)
      .withCount('employees', (query) => {
        query.as('registeredEmployees')
      })

    return response.json(positions)
  }

  public async store({ bouncer, params, request, response }: HttpContextContract) {
    await bouncer.authorize('canHandle')

    const eventId = params.event_id
    const event = await Event.query().where('id', '=', eventId).first()
    if (!event) {
      return response.notFound({ message: 'Event not found' })
    }

    const position = await request.validate(CreatePositionValidator)
    const positionToCreate = new Position()
    return positionToCreate.fill({ ...position, eventId: event.id }).save()
  }

  public async show({ params, response }: HttpContextContract) {
    const eventId = params.event_id
    const positionId = params.id

    const position = await Position.query()
      .where('id', '=', positionId)
      .andWhere('event_id', '=', eventId)
      .first()

    if (!position) {
      return response.notFound({ message: 'Position not found' })
    }
    return position
  }

  public async update({ bouncer, request, response, params }: HttpContextContract) {
    await bouncer.authorize('canHandle')

    const eventId = params.event_id
    const positionId = params.id

    const event = await Event.query().where('id', '=', eventId).first()
    if (!event) {
      return response.notFound({ message: 'Event not found' })
    }

    const position = await Position.query().where('id', '=', positionId).first()
    if (!position) {
      return response.notFound({ message: 'Position not found' })
    }

    const positionToUpdate = await request.validate(CreatePositionValidator)
    return position.merge({ ...positionToUpdate }).save()
  }

  public async destroy({ bouncer, params }: HttpContextContract) {
    await bouncer.authorize('canHandle')

    const eventId = params.event_id
    const positionId = params.id
    await Position.query().where('id', '=', positionId).andWhere('event_id', '=', eventId).delete()
  }
}

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Event from 'App/Models/Event'
import CreateEventImageValidator from 'App/Validators/CreateEventImageValidator'
import CreateEventValidator from 'App/Validators/CreateEventValidator'

export default class EventsController {
  public async index({ request }: HttpContextContract) {
    const limit = 10
    const page = request.input('page', 1)
    const events = await Event.query()
      .where('from', '>', new Date())
      .withCount('positions', (query) => {
        query.as('numberOfPositions')
      })
      .orderBy('from', 'desc')
      .paginate(page, limit)
    return events
  }

  public async store({ auth, bouncer, request, response }: HttpContextContract) {
    await bouncer.authorize('canHandle')

    const user = auth.use('api').user

    if (!user) {
      return response.unauthorized({ message: 'User not found' })
    }

    const eventToCreate = await request.validate(CreateEventValidator)
    const evenToSave = new Event()
    return evenToSave
      .fill({
        ...eventToCreate,
        createdBy: user.id,
      })
      .save()
  }

  public async storeImage({ auth, bouncer, request, response, params }: HttpContextContract) {
    await bouncer.authorize('canHandle')

    const user = auth.use('api').user
    if (!user) {
      return response.unauthorized({ message: 'You are not logged in' })
    }

    const event = await Event.find(params.id)
    if (!event) {
      return response.notFound({ message: 'Event with given id not found' })
    }

    await bouncer.authorize('canEditEvent', event)

    const { coverImage } = await request.validate(CreateEventImageValidator)
    if (!coverImage) {
      return response.badRequest({ message: 'Image saving failed' })
    }

    await coverImage.moveToDisk('./')
    if (!coverImage.fileName) {
      return response.badRequest({ message: 'Missing image file name' })
    }
    event.imageUrl = coverImage.fileName
    await event.save()

    return event
  }

  public async show({ params }: HttpContextContract) {
    const id = params.id
    const event = await Event.query().select('*').where('id', '=', id).firstOrFail()

    return event
  }

  public async update({ auth, bouncer, request, response, params }: HttpContextContract) {
    await bouncer.authorize('canHandle')

    const user = auth.use('api').user
    if (!user) {
      return response.unauthorized({ message: 'You are not logged in' })
    }

    const event = await Event.find(params.id)
    if (!event) {
      return response.notFound({ message: 'Event with given id not found' })
    }

    await bouncer.authorize('canEditEvent', event)
    const eventToUpdate = await request.validate(CreateEventValidator)
    await event.merge({ ...eventToUpdate }).save()

    return event
  }

  public async destroy({ auth, bouncer, response, params }: HttpContextContract) {
    await bouncer.authorize('canHandle')

    const user = auth.use('api').user
    if (!user) {
      return response.unauthorized({ message: 'You are not logged in' })
    }

    const event = await Event.find(params.id)
    if (!event) {
      return response.notFound({ message: 'Event with given id not found' })
    }

    await bouncer.authorize('canEditEvent', event)
    await event.delete()
  }
}

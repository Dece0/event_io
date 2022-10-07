// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { UserRole } from 'App/Types/types'
import CreateUserValidator from 'App/Validators/CreateUserValidator'
import LoginUserValidator from 'App/Validators/LoginUserValidator'

export default class AuthController {
  public async signUp({ request, response }: HttpContextContract) {
    const { firstName, lastName, email, phone, sex, birthdate, password } = await request.validate(
      CreateUserValidator
    )

    const newUser = new User()
    newUser.fill({
      firstName,
      lastName,
      email,
      phone,
      sex,
      birthdate,
      password,
      role: UserRole.ORGANIZER,
    })
    const user = await newUser.save()

    response.ok(user)
  }

  public async signIn({ auth, request, response }: HttpContextContract) {
    const { email, password } = await request.validate(LoginUserValidator)

    try {
      return auth.use('api').attempt(email, password, {
        expiresIn: '30 mins',
      })
    } catch (error) {
      return response.unauthorized('Invalid credentials')
    }
  }

  public async signOut({ auth }: HttpContextContract) {
    await auth.use('api').revoke()
    return {
      revoked: true,
    }
  }
}

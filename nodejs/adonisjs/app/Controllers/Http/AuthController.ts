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
    const user = await newUser
      .fill({
        firstName,
        lastName,
        email,
        phone,
        sex,
        birthdate,
        password,
        role: UserRole.EMPLOYEE,
      })
      .save()

    // const hashedPassword = await Hash.make(password)
    // const userIds = await Database.table<number>('users').insert({
    //   first_name: firstName,
    //   last_name: lastName,
    //   email,
    //   phone,
    //   sex,
    //   birthdate: birthdate.toISODate(),
    //   password: hashedPassword,
    //   updated_at: DateTime.now().toFormat('yyyy-MM-dd HH:mm:ss'),
    //   role: UserRole.EMPLOYEE,
    // })
    // const userId = userIds[0]

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

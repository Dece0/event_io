// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { UserRole } from 'App/Types/types'
import CreateUserValidator from 'App/Validators/CreateUserValidator'

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
      role: UserRole.EMPLOYEE,
    })
    const user = await newUser.save()

    response.ok(user)
  }
}

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.group(() => {
    Route.post('/sign-up', 'AuthController.signUp')
    Route.post('/sign-in', 'AuthController.signIn')
  }).prefix('/auth')

  Route.group(() => {
    Route.post('/auth/sign-out', 'AuthController.signOut')
    Route.get('/events', 'EventsController.index')
    Route.post('/events', 'EventsController.store')
    Route.get('/events/:id', 'EventsController.show')
    Route.put('/events/:id', 'EventsController.update')
    Route.delete('/events/:id', 'EventsController.destroy')
    Route.post('/events/:id/image', 'EventsController.storeImage')
    Route.resource('events.positions', 'PositionsController').apiOnly()
    Route.post('/events/:event_id/positions/:position_id/employees', 'EmployeesController.store')
    Route.delete(
      '/events/:event_id/positions/:position_id/employees/:user_id',
      'EmployeesController.destroy'
    )
  }).middleware('auth')
}).prefix('/api/v1')

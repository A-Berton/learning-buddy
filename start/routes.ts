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
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

/* Here the context is distructured, if it wasn't, we would have : 
Route.get('/', async (ctx) => {
  return ctx.view.render('welcome')
})
*/

Route.get('/', async ({view}) => {
  return view.render('welcome')
})

Route.get('/about', async () => {
  return "This is the About page"
})

Route.get('/contact', async () => {
  return "This is the Contact page"
})

Route.get('/user/:name', async ({params}) => {
  return `This is ${params.name}'s courses page`
})

Route.get('/courses/:name?', async ({params}) => {
  return params.name ? `This is the ${params.name} courses page`: `This is the courses page`
})
import fastify from 'fastify'
import { env } from './env'
import { transactionsRoutes } from './routes/transactions'
import cookie from '@fastify/cookie'

const app = fastify()

app.register(cookie)
app.register(transactionsRoutes, {
  prefix: 'transactions',
})

// app.get('/hello2', async (req, res) => {
//   const result = await knex('sqlite_schema').select('*')
//   return result
// })

// app.get('/hello3', async (req, res) => {
//   const result = await knex('transactions')
//     .insert({
//       id: crypto.randomUUID(),
//       title: 'Transacao de teste',
//       amount: 1000,
//     })
//     .returning('*')
//   return result
// })

app
  .listen({
    port: env.PORT,
  })
  .then(() => console.log(`Http server listening on port ${env.PORT}`))

import fastify from 'fastify'
import { knex } from './database'
import crypto from 'node:crypto'

const app = fastify()

app.get('/hello', async (req, res) => {
  const result = await knex('transactions').select('*')
  return result
})

app.get('/hello2', async (req, res) => {
  const result = await knex('sqlite_schema').select('*')
  return result
})

app.get('/hello3', async (req, res) => {
  const result = await knex('transactions')
    .insert({
      id: crypto.randomUUID(),
      title: 'Transacao de teste',
      amount: 1000,
    })
    .returning('*')
  return result
})

app
  .listen({
    port: 8878,
  })
  .then(() => console.log('Http server listening'))

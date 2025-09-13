import fastify from 'fastify'
// import crypto from 'node:crypto'
import { db } from './database.js'
import { env } from './env/index.js'

const app = fastify()

// http://localhost:3333/hello
app.get('/hello', async () => {
    /*
    const transaction = await db('transactions').insert({
        id: crypto.randomUUID(),
        title: 'Transação teste',
        amount: 1000,
    }).returning('*')

    return transaction
    */

    const transactions = await db('transactions')
        .select('*')
        .where('amount', 1000)
    return transactions

})

app.listen({
    port: env.PORT,
}).then(() => {
    console.log('HTTP server running')
})
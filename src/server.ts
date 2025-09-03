import fastify from 'fastify'

const app = fastify()

// http://localhost:3333/hello
app.get('/hello', () => {
    return 'Hello Nodejs'
})

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP server running')
})
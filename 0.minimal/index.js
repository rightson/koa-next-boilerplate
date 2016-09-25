'use strict';

const Koa = require('koa')
const app = new Koa()

app.use((ctx) => {
    ctx.body = 'Hello World'
})

app.listen(3000, () => console.log('Listening to port 3000'))

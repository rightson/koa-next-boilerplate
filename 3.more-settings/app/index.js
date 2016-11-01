'use strict';

const Koa = require('koa')
const logger = require('koa-logger')
const convert = require('koa-convert')
const compress = require('koa-compress')
const zlib = require('zlib')
const staticFiles = require('koa-static')
const body = require('koa-body')
const path = require('path')

const app = new Koa()

const rootdir = path.resolve(path.join(__dirname));

app.use(logger())

app.use(compress({
	flush: zlib.Z_SYNC_FLUSH
}))

app.use(body({
    bodyParser: {
        jsonLimit: '100mb',
        formLimit: '100mb',
        multipart: true,
        formidable: {
            uploadDir: path.join(rootdir, '..', 'upload')
        }
    }
}))

app.use(convert(staticFiles(path.join(rootdir, '..', 'public'))))

app.use(async(ctx) => {
    ctx.body = 'Hello World'
})

app.listen(3000, () => console.log('Listening to port 3000'))

module.exports = app

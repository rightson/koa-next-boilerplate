'use strict';

import Koa from 'koa'
import koaLogger from 'koa-logger'
import convert from 'koa-convert'
import compress from 'koa-compress'
import staticFiles from 'koa-static'
import body from 'koa-body'
import path from 'path'

import * as config from './config'
import start from './db'
import './models'
import controllers from './controllers'

const app = new Koa()

app.use(koaLogger())

app.use(compress(config.compress))

app.use(body(config.body))

app.use(convert(staticFiles(config.location.public)))

app.use(controllers.routes())

app.use(controllers.allowedMethods());

start(()=>{
	app.listen(config.port, config.banner)
});

export default app

'use strict';

import * as index from './views/index'

const router = require('koa-router')()

router.get('/', index.index)

export default router

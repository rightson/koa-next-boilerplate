'use strict';

import path from 'path'
import zlib from 'zlib'
import logger from 'winston'

const rootDir = path.resolve(path.join(__dirname), '..')

const pkg = require(path.join(rootDir, 'package.json'))

export const location = {
	public: path.join(rootDir, 'public'),
	upload: path.join(rootDir, 'upload')
}

export const db = {
    uri: process.env.production?
        `mongodb://localhost/${pkg.name}`:
        `mongodb://localhost/${pkg.name}-dev`,
    options: {
        db: { native_parser: true },
        server: { poolSize: 10 },
    }
}

export const port = process.env.PORT || 3000

export function banner() {
    logger.info('Listening to port ' + port)
}

export const compress = {
	flush: zlib.Z_SYNC_FLUSH
}

export const body = {
    bodyParser: {
        jsonLimit: '100mb',
        formLimit: '100mb',
        multipart: true,
        formidable: {
            uploadDir: location.upload
        }
    }
}

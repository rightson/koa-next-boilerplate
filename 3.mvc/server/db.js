'use strict';

import path from 'path'
import mongoose from 'mongoose'
import logger from 'winston'

import * as config from './config'

export default function (callback) {
    mongoose.connection.on('error', function(error) {
        logger.error('Failed to connect to ' + config.db.uri)
        logger.error(error)
        process.exit(0)
    });

    mongoose.connection.once('open', function() {
        logger.info('Connect to ' + config.db.uri);
        mongoose.Promise = global.Promise;
        callback(mongoose);
    });

    mongoose.connection.on('close', function() {
        logger.info('Disconnect from ' + config.db.uri)
    });

    process.on('SIGINT', function () {
        logger.info('SIGINT intercepted!')
        mongoose.connection.close(function() {
            process.exit(0)
        });
    });

    mongoose.connect(config.db.uri, config.db.options);
    return mongoose;
}

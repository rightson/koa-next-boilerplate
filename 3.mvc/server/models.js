'use strict';

import mongoose from 'mongoose'
import fs from 'fs'
import logger from 'winston'

const Schema = mongoose.Schema;

const User = new Schema({
    name: String,
    salt: String,
    email: String
})

mongoose.model('User', User);


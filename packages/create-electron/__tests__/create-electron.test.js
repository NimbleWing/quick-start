'use strict';

const createElectron = require('..');
const assert = require('assert').strict;

assert.strictEqual(createElectron(), 'Hello from createElectron');
console.info('createElectron tests passed');

'use strict';


/* ensure test env */
process.env.NODE_ENV = 'test';
process.env.MONGODB_URI =
  (process.env.MONGODB_URI || 'mongodb://localhost/emis-incident');


/* dependencies */
const { connect, clear, drop } = require('@lykmapipo/mongoose-test-helpers');


/* setup database */
before((done) => connect(done));


/* clear database */
before((done) => clear(done));


/* drop database */
after((done) => drop(done));

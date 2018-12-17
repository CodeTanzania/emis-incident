'use strict';


/* dependencies */
const path = require('path');
const { expect } = require('chai');
const Incident =
  require(path.join(__dirname, '..', '..', 'lib', 'incident.model'));

describe('Incident Statics', () => {

  it('should expose model name as constant', () => {
    expect(Incident.MODEL_NAME).to.exist;
    expect(Incident.MODEL_NAME).to.be.equal('Incident');
  });

  it('should expose collection name as constant', () => {
    expect(Incident.COLLECTION_NAME).to.exist;
    expect(Incident.COLLECTION_NAME).to.be.equal('incidents');
  });

});

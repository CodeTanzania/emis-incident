'use strict';

/* dependencies */
const { expect } = require('chai');
const { include } = require('@lykmapipo/include');
const { Incident } = include(__dirname, '..', '..');

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

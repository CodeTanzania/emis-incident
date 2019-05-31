'use strict';

/* dependencies */
const { expect } = require('chai');
const { include } = require('@lykmapipo/include');
const { Action } = include(__dirname, '..', '..');

describe('Action Statics', () => {
  it('should expose model name as constant', () => {
    expect(Action.MODEL_NAME).to.exist;
    expect(Action.MODEL_NAME).to.be.equal('Action');
  });

  it('should expose collection name as constant', () => {
    expect(Action.COLLECTION_NAME).to.exist;
    expect(Action.COLLECTION_NAME).to.be.equal('actions');
  });
});

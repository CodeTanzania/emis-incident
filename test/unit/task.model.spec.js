'use strict';


/* dependencies */
const { expect } = require('chai');
const { include } = require('@lykmapipo/include');
const { Task } = include(__dirname, '..', '..');

describe('Task Statics', () => {

  it('should expose model name as constant', () => {
    expect(Task.MODEL_NAME).to.exist;
    expect(Task.MODEL_NAME).to.be.equal('Task');
  });

  it('should expose collection name as constant', () => {
    expect(Task.COLLECTION_NAME).to.exist;
    expect(Task.COLLECTION_NAME).to.be.equal('tasks');
  });

});

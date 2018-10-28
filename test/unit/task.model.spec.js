'use strict';


/* dependencies */
const path = require('path');
const { expect } = require('chai');
const Task =
  require(path.join(__dirname, '..', '..', 'lib', 'task.model'));

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

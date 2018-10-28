'use strict';


/* dependencies */
const path = require('path');
const { expect } = require('chai');
const Action =
  require(path.join(__dirname, '..', '..', 'lib', 'action.model'));

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

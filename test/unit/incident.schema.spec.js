'use strict';


/* dependencies */
const path = require('path');
const { expect } = require('chai');
const { Schema } = require('mongoose');
const { IncidentType } = require('@codetanzania/emis-incident-type');
const Incident =
  require(path.join(__dirname, '..', '..', 'lib', 'incident.model'));


describe('Incident Schema', () => {

  it('should have incidentType field', () => {
    const incidentType = Incident.path('incidentType');

    expect(incidentType).to.exist;
    expect(incidentType).to.be.instanceof(Schema.Types.ObjectId);
    expect(incidentType.options).to.exist;
    expect(incidentType.options).to.be.an('object');
    expect(incidentType.options.type).to.exist;
    expect(incidentType.options.required).to.be.true;
    expect(incidentType.options.ref).to.exist;
    expect(incidentType.options.ref).to.be.equal(IncidentType.MODEL_NAME);
    expect(incidentType.options.index).to.be.true;
    expect(incidentType.options.autopopulate).to.exist;
  });

  it('should have name field', () => {
    const name = Incident.path('name');

    expect(name).to.exist;
    expect(name).to.be.instanceof(Schema.Types.String);
    expect(name.options).to.exist;
    expect(name.options).to.be.an('object');
    expect(name.options.type).to.exist;
    expect(name.options.trim).to.be.true;
    expect(name.options.required).to.be.true;
    expect(name.options.index).to.be.true;
    expect(name.options.searchable).to.be.true;
    expect(name.options.fake).to.exist;
  });

  it('should have description field', () => {
    const description = Incident.path('description');

    expect(description).to.exist;
    expect(description).to.be.instanceof(Schema.Types.String);
    expect(description.options).to.exist;
    expect(description.options).to.be.an('object');
    expect(description.options.type).to.exist;
    expect(description.options.trim).to.be.true;
    expect(description.options.index).to.be.true;
    expect(description.options.searchable).to.be.true;
    expect(description.options.fake).to.exist;
  });

  it('should have startedAt field', () => {
    const startedAt = Incident.path('startedAt');

    expect(startedAt).to.exist;
    expect(startedAt).to.be.instanceof(Schema.Types.Date);
    expect(startedAt.options).to.exist;
    expect(startedAt.options).to.be.an('object');
    expect(startedAt.options.type).to.exist;
    expect(startedAt.options.index).to.be.true;
    expect(startedAt.options.fake).to.exist;
  });

  it('should have epicentre field', () => {
    const epicentre = Incident.path('epicentre');
    const type = Incident.path('epicentre.type');
    const coordinates = Incident.path('epicentre.coordinates');

    expect(epicentre).to.exist;
    expect(type).to.be.instanceof(Schema.Types.String);
    expect(coordinates).to.be.instanceof(Schema.Types.Array);
  });

  it('should have endedAt field', () => {
    const endedAt = Incident.path('endedAt');

    expect(endedAt).to.exist;
    expect(endedAt).to.be.instanceof(Schema.Types.Date);
    expect(endedAt.options).to.exist;
    expect(endedAt.options).to.be.an('object');
    expect(endedAt.options.type).to.exist;
    expect(endedAt.options.index).to.be.true;
    expect(endedAt.options.fake).to.exist;
  });

});

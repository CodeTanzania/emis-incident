'use strict';


/* dependencies */
const { expect } = require('chai');
const { include } = require('@lykmapipo/include');
const { Schema } = require('mongoose');
const { IncidentType } = require('@codetanzania/emis-incident-type');
const { Plan } = require('@codetanzania/emis-plan');
const Incident = include(__dirname, '..', '..', 'lib', 'incident.model');


describe('Incident Schema', () => {

  it('should have type field', () => {
    const type = Incident.path('type');

    expect(type).to.exist;
    expect(type).to.be.instanceof(Schema.Types.ObjectId);
    expect(type.options).to.exist;
    expect(type.options).to.be.an('object');
    expect(type.options.type).to.exist;
    expect(type.options.required).to.be.true;
    expect(type.options.ref).to.exist;
    expect(type.options.ref).to.be.equal(IncidentType.MODEL_NAME);
    expect(type.options.index).to.be.true;
    expect(type.options.autopopulate).to.exist;
  });

  it('should have plan field', () => {
    const plan = Incident.path('plan');

    expect(plan).to.exist;
    expect(plan).to.be.instanceof(Schema.Types.ObjectId);
    expect(plan.options).to.exist;
    expect(plan.options).to.be.an('object');
    expect(plan.options.type).to.exist;
    expect(plan.options.ref).to.exist;
    expect(plan.options.ref).to.be.equal(Plan.MODEL_NAME);
    expect(plan.options.index).to.be.true;
    expect(plan.options.autopopulate).to.exist;
  });

  it('should have number field', () => {
    const number = Incident.path('number');

    expect(number).to.exist;
    expect(number).to.be.instanceof(Schema.Types.String);
    expect(number.options).to.exist;
    expect(number.options).to.be.an('object');
    expect(number.options.type).to.exist;
    expect(number.options.trim).to.be.true;
    expect(number.options.index).to.be.true;
    expect(number.options.unique).to.be.true;
    expect(number.options.searchable).to.be.true;
    expect(number.options.fake).to.exist;
  });

  it('should have event field', () => {
    const event = Incident.path('event');

    expect(event).to.exist;
    expect(event).to.be.instanceof(Schema.Types.String);
    expect(event.options).to.exist;
    expect(event.options).to.be.an('object');
    expect(event.options.type).to.exist;
    expect(event.options.trim).to.be.true;
    expect(event.options.required).to.be.true;
    expect(event.options.index).to.be.true;
    expect(event.options.searchable).to.be.true;
    expect(event.options.fake).to.exist;
  });

  it('should have causes field', () => {
    const causes = Incident.path('causes');

    expect(causes).to.exist;
    expect(causes).to.be.instanceof(Schema.Types.Array);
    expect(causes.options).to.exist;
    expect(causes.options).to.be.an('object');
    expect(causes.options.type).to.exist;
    expect(causes.options.trim).to.be.true;
    expect(causes.options.index).to.be.true;
    expect(causes.options.searchable).to.be.true;
    expect(causes.options.fake).to.exist;
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

  it('should have areas field', () => {
    const areas = Incident.path('areas');

    expect(areas).to.exist;
    expect(areas).to.be.instanceof(Schema.Types.Array);
    expect(areas.options).to.exist;
    expect(areas.options).to.be.an('object');
    expect(areas.options.type).to.exist;
    expect(areas.options.trim).to.be.true;
    expect(areas.options.required).to.be.true;
    expect(areas.options.index).to.be.true;
    expect(areas.options.searchable).to.be.true;
    expect(areas.options.fake).to.exist;
  });

  it('should have epicentre field', () => {
    const epicentre = Incident.path('epicentre');
    const type = Incident.path('epicentre.type');
    const coordinates = Incident.path('epicentre.coordinates');

    expect(epicentre).to.exist;
    expect(type).to.be.instanceof(Schema.Types.String);
    expect(coordinates).to.be.instanceof(Schema.Types.Array);
  });

  it('should have remarks field', () => {
    const remarks = Incident.path('remarks');

    expect(remarks).to.exist;
    expect(remarks).to.be.instanceof(Schema.Types.Array);
    expect(remarks.options).to.exist;
    expect(remarks.options).to.be.an('object');
    expect(remarks.options.type).to.exist;
    expect(remarks.options.trim).to.be.true;
    expect(remarks.options.index).to.be.true;
    expect(remarks.options.searchable).to.be.true;
    expect(remarks.options.fake).to.exist;
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

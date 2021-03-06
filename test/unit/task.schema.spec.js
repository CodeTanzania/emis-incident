'use strict';

/* dependencies */
const { expect } = require('chai');
const { include } = require('@lykmapipo/include');
const { Schema } = require('mongoose');
const { IncidentType } = require('@codetanzania/emis-incident-type');
const { Task, Action, Incident } = include(__dirname, '..', '..');

describe('Task Schema', () => {
  it('should have incidentType field', () => {
    const incidentType = Action.path('incidentType');

    expect(incidentType).to.exist;
    expect(incidentType).to.be.instanceof(Schema.Types.ObjectId);
    expect(incidentType.options).to.exist;
    expect(incidentType.options).to.be.an('object');
    expect(incidentType.options.type).to.exist;
    expect(incidentType.options.ref).to.exist;
    expect(incidentType.options.ref).to.be.equal(IncidentType.MODEL_NAME);
    expect(incidentType.options.required).to.be.true;
    expect(incidentType.options.exists).to.be.true;
    expect(incidentType.options.index).to.be.true;
    expect(incidentType.options.autopopulate).to.exist;
  });

  it('should have incident field', () => {
    const incident = Action.path('incident');

    expect(incident).to.exist;
    expect(incident).to.be.instanceof(Schema.Types.ObjectId);
    expect(incident.options).to.exist;
    expect(incident.options).to.be.an('object');
    expect(incident.options.type).to.exist;
    expect(incident.options.ref).to.exist;
    expect(incident.options.ref).to.be.equal(Incident.MODEL_NAME);
    expect(incident.options.required).to.be.true;
    expect(incident.options.exists).to.be.true;
    expect(incident.options.index).to.be.true;
    expect(incident.options.autopopulate).to.exist;
  });

  it('should have action field', () => {
    const action = Task.path('action');

    expect(action).to.exist;
    expect(action).to.be.instanceof(Schema.Types.ObjectId);
    expect(action.options).to.exist;
    expect(action.options).to.be.an('object');
    expect(action.options.type).to.exist;
    expect(action.options.ref).to.exist;
    expect(action.options.ref).to.be.equal(Action.MODEL_NAME);
    expect(action.options.index).to.be.true;
    expect(action.options.exists).to.be.true;
    expect(action.options.autopopulate).to.be.exist;
  });

  it('should have phase field', () => {
    const phase = Task.path('phase');

    expect(phase).to.exist;
    expect(phase).to.be.instanceof(Schema.Types.String);
    expect(phase.options).to.exist;
    expect(phase.options).to.be.an('object');
    expect(phase.options.type).to.exist;
    expect(phase.options.trim).to.be.true;
    expect(phase.options.enum).to.exist;
    expect(phase.options.index).to.be.true;
    expect(phase.options.searchable).to.be.true;
    expect(phase.options.fake).to.exist;
  });

  it('should have name field', () => {
    const name = Task.path('name');

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
    const description = Task.path('description');

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

  it('should have number field', () => {
    const number = Task.path('number');

    expect(number).to.exist;
    expect(number).to.be.instanceof(Schema.Types.Number);
    expect(number.options).to.exist;
    expect(number.options).to.be.an('object');
    expect(number.options.type).to.exist;
    expect(number.options.min).to.be.exist;
    expect(number.options.max).to.be.exist;
    expect(number.options.index).to.be.true;
    expect(number.options.fake).to.exist;
  });
});

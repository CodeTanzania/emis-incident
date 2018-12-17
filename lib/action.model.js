'use strict';


/**
 * @module Action
 * @name Action
 * @description Define a specific action or function performed in
 * emergency(or disaster) event.
 *
 * Its a major unit of work to be completed in achieving objectives of an
 * emergency(or disaster) plan.
 *
 * An action has a set of tasks to be followed and it consumes resources.
 *
 * An action may have a precedence relationship with other actions i.e
 * finish-to-start, start-to-start, finish-to-finish etc.
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @public
 */


/* dependencies */
const _ = require('lodash');
const { getString, getStrings } = require('@lykmapipo/env');
const { include } = require('@lykmapipo/include');
const { Schema, SchemaTypes } = require('@lykmapipo/mongoose-common');
const { model, SCHEMA_OPTIONS } = require('@lykmapipo/mongoose-common');
const actions = require('mongoose-rest-actions');
const { IncidentType } = require('@codetanzania/emis-incident-type');
const Incident = include(__dirname, 'incident.model');
const { ObjectId } = SchemaTypes;


/* constants */
const MAX_POPULATION_DEPTH = 1;
const ACTION_MODEL_NAME = getString('ACTION_MODEL_NAME', 'Action');
const ACTION_COLLECTION_NAME = getString('ACTION_COLLECTION_NAME', 'actions');
const DEFAULT_DISASTER_PHASE = getString('DEFAULT_DISASTER_PHASE', 'Mitigation');
const DISASTER_PHASES = getStrings('DISASTER_PHASES', [
  'Mitigation', 'Preparedness',
  'Response', 'Recovery'
]);
const OPTION_INCIDENTTYPE_AUTOPOPULATE = ({
  select: { nature: 1, family: 1, name: 1, color: 1 },
  maxDepth: MAX_POPULATION_DEPTH
});
const OPTION_INCIDENT_AUTOPOPULATE = ({
  select: { event: 1, startedAt: 1, endedAt: 1 },
  maxDepth: MAX_POPULATION_DEPTH
});
const OPTION_AUTOPOPULATE = ({
  maxDepth: MAX_POPULATION_DEPTH
});


/**
 * @name ActionSchema
 * @type {Schema}
 * @author lally elias <lallyelias87@gmail.com>
 * @since 0.1.0
 * @version 0.1.0
 * @private
 */
const ActionSchema = new Schema({
  /**
   * @name incidentType
   * @description An incident type(or nature) under which an action belongs.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {string} ref - referenced collection
   * @property {boolean} required - mark required
   * @property {boolean} exists - ensure ref exists before save
   * @property {boolean} index - ensure database index
   * @property {object} autopopulate - incident type population options
   * @property {boolean} taggable - allow field use for tagging
   *
   * @since 0.1.0
   * @version 1.0.0
   * @instance
   */
  incidentType: {
    type: ObjectId,
    ref: IncidentType.MODEL_NAME,
    required: true,
    index: true,
    exists: true,
    autopopulate: OPTION_INCIDENTTYPE_AUTOPOPULATE,
    taggable: true
  },


  /**
   * @name incident
   * @description An incident under which an action is applicable.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {string} ref - referenced collection
   * @property {boolean} required - mark required
   * @property {boolean} exists - ensure ref exists before save
   * @property {boolean} index - ensure database index
   * @property {object} autopopulate - incident type population options
   * @property {boolean} taggable - allow field use for tagging
   *
   * @since 0.1.0
   * @version 1.0.0
   * @instance
   */
  incident: {
    type: ObjectId,
    ref: Incident.MODEL_NAME,
    required: true,
    index: true,
    exists: true,
    autopopulate: OPTION_INCIDENT_AUTOPOPULATE,
    taggable: true
  },


  /**
   * @name phase
   * @description Emergency(or disaster) management phase under which an action
   * is applicable.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} enum - list of acceptable values
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow for searching
   * @property {boolean} taggable - allow field use for tagging
   * @property {boolean} default - default value set when none provided
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 0.1.0
   * @instance
   */
  phase: {
    type: String,
    trim: true,
    enum: DISASTER_PHASES,
    index: true,
    searchable: true,
    taggable: true,
    default: DEFAULT_DISASTER_PHASE,
    fake: true
  },


  /**
   * @name name
   * @description Human readable name of an action.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} required - mark required
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow for searching
   * @property {boolean} taggable - allow field use for tagging
   * @property {object} fake - fake data generator options
   *
   * @author lally elias <lallyelias87@gmail.com>
   * @since 0.1.0
   * @version 0.1.0
   * @instance
   */
  name: {
    type: String,
    trim: true,
    required: true,
    index: true,
    searchable: true,
    taggable: true,
    fake: {
      generator: 'lorem',
      type: 'sentence'
    }
  },


  /**
   * @name description
   * @description A brief summary about an action i.e additional details
   * that clarify what an action is.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow for searching
   * @property {object} fake - fake data generator options
   *
   * @author lally elias <lallyelias87@gmail.com>
   * @since 0.1.0
   * @version 0.1.0
   * @instance
   */
  description: {
    type: String,
    trim: true,
    index: true,
    searchable: true,
    fake: {
      generator: 'lorem',
      type: 'sentence'
    }
  }

}, SCHEMA_OPTIONS);


/*
 *------------------------------------------------------------------------------
 *  Hooks
 *------------------------------------------------------------------------------
 */


/**
 * @name validate
 * @function validate
 * @description action schema pre validation hook
 * @param {function} done callback to invoke on success or error
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 0.1.0
 * @version 0.1.0
 * @private
 */
ActionSchema.pre('validate', function (done) {

  this.preValidate(done);

});


/*
 *------------------------------------------------------------------------------
 *  Instance
 *------------------------------------------------------------------------------
 */


/**
 * @name preValidate
 * @function preValidate
 * @description action schema pre validation hook logic
 * @param {function} done callback to invoke on success or error
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 0.1.0
 * @version 0.1.0
 * @instance
 */
ActionSchema.methods.preValidate = function preValidate(done) {

  // ensure incident type
  this.incidentType = (this.incidentType || _.get(this, 'incident.type'));

  // continue
  done();

};


/*
 *------------------------------------------------------------------------------
 * Statics
 *------------------------------------------------------------------------------
 */


/* static constants */
ActionSchema.statics.MODEL_NAME = ACTION_MODEL_NAME;
ActionSchema.statics.COLLECTION_NAME = ACTION_COLLECTION_NAME;
ActionSchema.statics.OPTION_AUTOPOPULATE = OPTION_AUTOPOPULATE;


/*
 *------------------------------------------------------------------------------
 * Plugins
 *------------------------------------------------------------------------------
 */


/* plug mongoose rest actions*/
ActionSchema.plugin(actions);


/* export action model */
module.exports = model(ACTION_MODEL_NAME, ActionSchema);

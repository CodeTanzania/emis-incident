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
const path = require('path');
const _ = require('lodash');
const { getString, getStrings } = require('@lykmapipo/env');
const mongoose = require('mongoose');
const actions = require('mongoose-rest-actions');
const { IncidentType } = require('@codetanzania/emis-incident-type');
const Incident = require(path.join(__dirname, 'incident.model'));
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;


/* constants */
const MAX_POPULATION_DEPTH = 1;
const ACTION_MODEL_NAME = getString('ACTION_MODEL_NAME', 'Action');
const ACTION_COLLECTION_NAME = getString('ACTION_COLLECTION_NAME', 'actions');
const SCHEMA_OPTIONS =
  ({ timestamps: true, emitIndexErrors: true, collection: ACTION_COLLECTION_NAME });
const DEFAULT_DISASTER_PHASE = getString('DEFAULT_DISASTER_PHASE', 'Mitigation');
const DEFAULT_DISASTER_PHASES = [
  'Mitigation', 'Preparedness',
  'Response', 'Recovery'
];
const DISASTER_PHASES = getStrings('DISASTER_PHASES', DEFAULT_DISASTER_PHASES);
const OPTION_AUTOPOPULATE = {
  maxDepth: MAX_POPULATION_DEPTH
};


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
   * @property {object} autopopulate - incident type population options
   * @property {boolean} index - ensure database index
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
    autopopulate: {
      select: { nature: 1, family: 1, name: 1, color: 1 },
      maxDepth: MAX_POPULATION_DEPTH
    }
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
   * @property {object} autopopulate - incident type population options
   * @property {boolean} index - ensure database index
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
    autopopulate: {
      select: { name: 1, startedAt: 1, endedAt: 1 },
      maxDepth: MAX_POPULATION_DEPTH
    }
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

  //ensure incident type
  if (!this.incidentType && this.incident) {
    this.incidentType = this.incident.type;
  }

  //ensure disaster phase
  if (_.isEmpty(this.phase)) {
    this.phase = DEFAULT_DISASTER_PHASE;
  }

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
module.exports = mongoose.model(ACTION_MODEL_NAME, ActionSchema);

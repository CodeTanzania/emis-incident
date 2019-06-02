'use strict';

/**
 * @module Task
 * @name Task
 * @description Describe a specific task or step. It specified way to carry
 * out an action.
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
const { model, SCHEMA_OPTIONS, copyInstance } = require('@lykmapipo/mongoose-common');
const actions = require('mongoose-rest-actions');
const { IncidentType } = require('@codetanzania/emis-incident-type');
const Incident = include(__dirname, 'incident.model');
const Action = include(__dirname, 'action.model');
const { ObjectId } = SchemaTypes;

/* constants */
const MAX_POPULATION_DEPTH = 1;
const TASK_MODEL_NAME = getString('TASK_MODEL_NAME', 'Task');
const TASK_COLLECTION_NAME = getString('TASK_COLLECTION_NAME', 'tasks');
const DEFAULT_DISASTER_PHASE = getString(
  'DEFAULT_DISASTER_PHASE',
  'Mitigation'
);
const DISASTER_PHASES = getStrings('DISASTER_PHASES', [
  'Mitigation',
  'Preparedness',
  'Response',
  'Recovery',
]);
const OPTION_INCIDENTTYPE_AUTOPOPULATE = {
  select: { nature: 1, family: 1, name: 1, color: 1 },
  maxDepth: MAX_POPULATION_DEPTH,
};
const OPTION_INCIDENT_AUTOPOPULATE = {
  select: { event: 1, startedAt: 1, endedAt: 1 },
  maxDepth: MAX_POPULATION_DEPTH,
};
const OPTION_ACTION_AUTOPOPULATE = {
  select: { name: 1 },
  maxDepth: MAX_POPULATION_DEPTH,
};
const OPTION_AUTOPOPULATE = {
  maxDepth: MAX_POPULATION_DEPTH,
};

/**
 * @name TaskSchema
 * @type {Schema}
 * @author lally elias <lallyelias87@gmail.com>
 * @since 0.1.0
 * @version 0.1.0
 * @private
 */
const TaskSchema = new Schema(
  {
    /**
     * @name incidentType
     * @description An incident type(or nature) under which a task belongs.
     *
     * @type {object}
     * @property {object} type - schema(data) type
     * @property {string} ref - referenced collection
     * @property {boolean} required - mark required
     * @property {boolean} index - ensure database index
     * @property {boolean} exists - ensure ref exists before save
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
      taggable: true,
    },

    /**
     * @name incident
     * @description An incident under which a task is applicable.
     *
     * @type {object}
     * @property {object} type - schema(data) type
     * @property {string} ref - referenced collection
     * @property {boolean} required - mark required
     * @property {boolean} index - ensure database index
     * @property {boolean} exists - ensure ref exists before save
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
      taggable: true,
    },

    /**
     * @name action
     * @description An action under which a task is applicable.
     *
     * @type {object}
     * @property {object} type - schema(data) type
     * @property {string} ref - referenced collection
     * @property {boolean} required - mark required
     * @property {boolean} index - ensure database index
     * @property {boolean} exists - ensure ref exists before save
     * @property {object} autopopulate - incident type population options
     * @property {boolean} taggable - allow field use for tagging
     *
     * @since 0.1.0
     * @version 1.0.0
     * @instance
     */
    action: {
      type: ObjectId,
      ref: Action.MODEL_NAME,
      required: true,
      index: true,
      exists: true,
      autopopulate: OPTION_ACTION_AUTOPOPULATE,
      taggable: true,
    },

    /**
     * @name phase
     * @description Emergency(or disaster) management phase under which a task
     * applicable.
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
      fake: true,
    },

    /**
     * @name name
     * @description Human readable name of a task.
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
        type: 'sentence',
      },
    },

    /**
     * @name description
     * @description A brief summary about a task i.e additional details
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
        type: 'sentence',
      },
    },

    /**
     * @name number
     * @description Task number(or sequence) for ordering in relation to
     * other action tasks.
     *
     * @type {object}
     * @property {object} type - schema(data) type
     * @property {boolean} index - ensure database index
     * @property {number} min - minimum value allowed
     * @property {number} max - maximum value allowed
     * @property {object} fake - fake data generator options
     *
     * @since 0.1.0
     * @version 1.0.0
     * @instance
     */
    number: {
      type: Number,
      index: true,
      min: 1,
      max: Number.MAX_SAFE_INTEGER,
      fake: {
        generator: 'random',
        type: 'number',
      },
    },
  },
  SCHEMA_OPTIONS
);

/*
 *------------------------------------------------------------------------------
 *  Hooks
 *------------------------------------------------------------------------------
 */

/**
 * @name validate
 * @function validate
 * @description procedure schema pre validation hook
 * @param {function} done callback to invoke on success or error
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 0.1.0
 * @version 0.1.0
 * @private
 */
TaskSchema.pre('validate', function(done) {
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
 * @description procedure schema pre validation hook logic
 * @param {function} done callback to invoke on success or error
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 0.1.0
 * @version 0.1.0
 * @instance
 */
TaskSchema.methods.preValidate = function preValidate(done) {
  // ensure plan
  this.incident = this.incident || _.get(this, 'action.incident');

  // ensure incident type
  this.incidentType = this.incidentType || _.get(this, 'action.incidentType');

  // ensure disaster phase
  this.phase =
    this.phase || _.get(this, 'action.phase', DEFAULT_DISASTER_PHASE);

  // continue
  done();
};

/*
 *------------------------------------------------------------------------------
 * Statics
 *------------------------------------------------------------------------------
 */

/* static constants */
TaskSchema.statics.MODEL_NAME = TASK_MODEL_NAME;
TaskSchema.statics.COLLECTION_NAME = TASK_COLLECTION_NAME;
TaskSchema.statics.OPTION_AUTOPOPULATE = OPTION_AUTOPOPULATE;

/**
 * @name prepareSeedCriteria
 * @function prepareSeedCriteria
 * @description prepare task seeding upsert criteria
 * @param {Object} seed plain object task seed
 * @return {Object} criteria used to upsert task
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.5.0
 * @version 0.1.0
 * @public
 */
TaskSchema.statics.prepareSeedCriteria = seed => {
  // prepare task upsert criteria by _id or fields
  let criteria = copyInstance(seed);
  criteria = (
    criteria._id ?
     _.pick(criteria, '_id') : 
     _.pick(criteria, 'phase', 'name')
  );
  // return task upsert criteria
  return criteria;
};

/*
 *------------------------------------------------------------------------------
 * Plugins
 *------------------------------------------------------------------------------
 */

/* plug mongoose rest actions*/
TaskSchema.plugin(actions);

/* export procedure model */
module.exports = model(TASK_MODEL_NAME, TaskSchema);

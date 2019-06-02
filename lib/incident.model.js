'use strict';

/**
 * @module Incident
 * @name Incident
 * @description A representation of an entity which define and track an
 * instance(or occurrence) of an emergency(or disaster) event.
 *
 * @see {@link https://en.wikipedia.org/wiki/Disaster}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @public
 */

/* dependencies */
const uuidv1 = require('uuid/v1');
const _ = require('lodash');
const { getString } = require('@lykmapipo/env');
const { Schema, SchemaTypes } = require('@lykmapipo/mongoose-common');
const { model, SCHEMA_OPTIONS, copyInstance } = require('@lykmapipo/mongoose-common');
const actions = require('mongoose-rest-actions');
const { IncidentType } = require('@codetanzania/emis-incident-type');
const { Plan } = require('@codetanzania/emis-plan');
const { Point } = require('mongoose-geojson-schemas');
const { ObjectId } = SchemaTypes;

/* constants */
const MAX_POPULATION_DEPTH = 1;
const INCIDENT_MODEL_NAME = getString('INCIDENT_MODEL_NAME', 'Incident');
const INCIDENT_COLLECTION_NAME = getString(
  'INCIDENT_COLLECTION_NAME',
  'incidents'
);
const OPTION_AUTOPOPULATE = {
  maxDepth: MAX_POPULATION_DEPTH,
};
const OPTION_INCIDENTTYPE_AUTOPOPULATE = {
  select: { nature: 1, family: 1, name: 1, color: 1 },
  maxDepth: MAX_POPULATION_DEPTH,
};
const OPTION_PLAN_AUTOPOPULATE = {
  select: { boundary: 1, owner: 1 },
  maxDepth: MAX_POPULATION_DEPTH,
};

/**
 * @name IncidentSchema
 * @type {Schema}
 * @author lally elias <lallyelias87@gmail.com>
 * @since 0.1.0
 * @version 0.1.0
 * @private
 */
const IncidentSchema = new Schema(
  {
    /**
     * @name type
     * @description An incident type(or nature) under which an incident belongs.
     *
     * @type {object}
     * @property {object} type - schema(data) type
     * @property {boolean} required - mark required
     * @property {string} ref - referenced collection
     * @property {boolean} exists - ensure ref exists before save
     * @property {boolean} index - ensure database index
     * @property {object} autopopulate - jurisdiction population options
     * @property {boolean} taggable - allow field use for tagging
     *
     * @since 0.1.0
     * @version 1.0.0
     * @instance
     * @example
     * {
     *    "_id": "5af2fe3ea937a3238bd8e64b",
     *    "name": "Flood"
     *    "nature": "Natural",
     *    "family": "Hydrological",
     *    "color": "#F7EF18",
     *  }
     */
    type: {
      type: ObjectId,
      required: true,
      ref: IncidentType.MODEL_NAME,
      exists: true,
      index: true,
      autopopulate: OPTION_INCIDENTTYPE_AUTOPOPULATE,
      taggable: true,
    },

    /**
     * @name plan
     * @description An incident management plan activated to respond to
     * an incident.
     *
     * @type {object}
     * @property {object} type - schema(data) type
     * @property {string} ref - referenced collection
     * @property {boolean} exists - ensure ref exists before save
     * @property {boolean} index - ensure database index
     * @property {object} autopopulate - jurisdiction population options
     * @property {boolean} taggable - allow field use for tagging
     *
     * @since 0.1.0
     * @version 1.0.0
     * @instance
     * @example
     * {
     *  "boundary":
     *  {
     *      "_id": "5c17661e3c9d520004e2b480"
     *      "category": "Boundary",
     *      "type": "Administrative",
     *      "level": "region",
     *      "name": "Dar-es-salaam",
     *  },
     *  "owner":
     *  {
     *      "_id": "5c17661e3c9d520004e2b4ab"
     *      "name": "DarMAERT",
     *      "title": "Dar es Salaam Multi Agency Emergency Response Team",
     *      "email": "info@darmaert.com",
     *      "mobile": "255654111222",
     *   }
     * }
     */
    plan: {
      type: ObjectId,
      ref: Plan.MODEL_NAME,
      exists: true,
      index: true,
      autopopulate: OPTION_PLAN_AUTOPOPULATE,
      taggable: true,
    },

    /**
     * @name number
     * @description Human readable, system specific identifier of an incident.
     *
     * It consist of two letters to identify the disaster(or incident) type
     * (e.g. EQ - earthquake); the year of the disaster; a six-digit, sequential
     * disaster number; and the three-letter ISO code for country of occurrence
     * e.g EQ-2001-000033-TZA.
     *
     * @type {object}
     * @property {object} type - schema(data) type
     * @property {boolean} trim - force trimming
     * @property {boolean} required - mark required
     * @property {boolean} uppercase - force value to uppercase
     * @property {boolean} index - ensure database index
     * @property {boolean} unique - ensure unique database index
     * @property {boolean} searchable - allow searching
     * @property {boolean} taggable - allow field use for tagging
     * @property {object} fake - fake data generator options
     *
     * @since 0.1.0
     * @version 0.1.0
     * @instance
     * @example
     * EQ-2018-000033-TZA, FL-2018-000033-TZA etc.
     */
    number: {
      type: String,
      trim: true,
      uppercase: true,
      index: true,
      unique: true,
      searchable: true,
      taggable: true,
      fake: {
        generator: 'random',
        type: 'uuid',
      },
    },

    /**
     * @name event
     * @description Human readable name(or title) of an incident.
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
     * @example
     * Floods
     */
    event: {
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
     * @name causes
     * @description A brief summary about cause(s) or source(s) of an
     * incident event.
     *
     * @type {object}
     * @property {object} type - schema(data) type
     * @property {boolean} trim - force trimming
     * @property {boolean} index - ensure database index
     * @property {boolean} searchable - allow for searching
     * @property {boolean} taggable - allow field use for tagging
     * @property {object} fake - fake data generator options
     *
     * @author lally elias <lallyelias87@gmail.com>
     * @since 0.1.0
     * @version 0.1.0
     * @instance
     * @example
     * Heavy rainfall, overflowing water from the dam.
     */
    causes: {
      type: [String],
      trim: true,
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
     * @description A brief summary about an incident event i.e additional details
     * that clarify more about an incident event.
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
     * @example
     * Roads, farms and crops were damaged.
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
     * @name startedAt
     * @description Date when an incident was effective occured(or reported).
     *
     * @type {object}
     * @property {object} type - schema(data) type
     * @property {boolean} index - ensure database index
     * @property {object} fake - fake data generator options
     *
     * @author lally elias <lallyelias87@gmail.com>
     * @since 0.1.0
     * @version 0.1.0
     * @instance
     * @example
     * 2018-10-17T07:53:32.831Z
     */
    startedAt: {
      type: Date,
      index: true,
      fake: {
        generator: 'date',
        type: 'past',
      },
    },

    /**
     * @name areas
     * @description Human readable text describing origin, affected and
     * proned locations(s) of an incident event.
     *
     * @type {object}
     * @property {object} type - schema(data) type
     * @property {boolean} trim - force trimming
     * @property {boolean} required - mark required
     * @property {boolean} index - ensure database index
     * @property {boolean} searchable - allow searching
     * @property {boolean} taggable - allow field use for tagging
     * @property {object} fake - fake data generator options
     *
     * @since 0.1.0
     * @version 0.1.0
     * @instance
     * @example
     * Dar es salaam, Dodoma
     */
    areas: {
      type: [String],
      trim: true,
      required: true,
      index: true,
      searchable: true,
      taggable: true,
      fake: {
        generator: 'address',
        type: 'county',
      },
    },

    /**
     * @name epicentre
     * @description A geo-point that may be considered as the center of
     * an incident event.
     *
     * @type {object}
     * @property {object} epicentre - geo json point
     * @property {string} epicentre.type - Point
     * @property {number[]} epicentre.coordinates - longitude, latitude pair of
     * the geo point
     *
     * @since 1.0.0
     * @version 0.1.0
     * @instance
     * @example
     * {
     *    type: 'Point',
     *    coordinates: [-76.80207859497996, 55.69469494228919]
     * }
     */
    epicentre: Point,

    /**
     * @name remarks
     * @description A brief human readable comments and recommendation about an
     * incident event.
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
     * @example
     * Requested relief items should be provided to the victims immediately
     */
    remarks: {
      type: [String],
      trim: true,
      index: true,
      searchable: true,
      fake: {
        generator: 'lorem',
        type: 'sentence',
      },
    },

    /**
     * @name endedAt
     * @description Date when an incident was declared no longer a threat.
     *
     * @type {object}
     * @property {object} type - schema(data) type
     * @property {boolean} index - ensure database index
     * @property {object} fake - fake data generator options
     *
     * @author lally elias <lallyelias87@gmail.com>
     * @since 0.1.0
     * @version 0.1.0
     * @instance
     * @example
     * 2018-10-19T07:53:32.831Z
     */
    endedAt: {
      type: Date,
      index: true,
      fake: {
        generator: 'date',
        type: 'recent',
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
 * @description incident schema pre validation hook
 * @param {function} done callback to invoke on success or error
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 0.1.0
 * @version 0.1.0
 * @private
 */
IncidentSchema.pre('validate', function(done) {
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
 * @description incident schema pre validation hook logic
 * @param {function} done callback to invoke on success or error
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 0.1.0
 * @version 0.1.0
 * @instance
 */
IncidentSchema.methods.preValidate = function preValidate(done) {
  // ensure incident number
  this.number = this.number || uuidv1(); // TODO number generator

  // force causes to be an array
  this.causes = [].concat(this.causes);

  // ensure started(or reported) date
  this.startedAt = this.startedAt || new Date();

  // continue
  done();
};

/**
 * @name prepareSeedCriteria
 * @function prepareSeedCriteria
 * @description prepare incident seeding upsert criteria
 * @param {Object} seed plain object incident seed
 * @return {Object} criteria used to upsert incident
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.5.0
 * @version 0.1.0
 * @public
 */
IncidentSchema.statics.prepareSeedCriteria = seed => {
  // prepare incident upsert criteria by _id or fields
  let criteria = copyInstance(seed);
  criteria = (
    criteria._id ?
     _.pick(criteria, '_id') : 
     _.pick(criteria, 'event', 'number')
  );
  // return incident upsert criteria
  return criteria;
};


/*
 *------------------------------------------------------------------------------
 * Statics
 *------------------------------------------------------------------------------
 */

/* static constants */
IncidentSchema.statics.MODEL_NAME = INCIDENT_MODEL_NAME;
IncidentSchema.statics.COLLECTION_NAME = INCIDENT_COLLECTION_NAME;
IncidentSchema.statics.OPTION_AUTOPOPULATE = OPTION_AUTOPOPULATE;

/*
 *------------------------------------------------------------------------------
 * Plugins
 *------------------------------------------------------------------------------
 */

/* plug mongoose rest actions*/
IncidentSchema.plugin(actions);

/* export incident model */
module.exports = model(INCIDENT_MODEL_NAME, IncidentSchema);

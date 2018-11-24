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
const { getString } = require('@lykmapipo/env');
const mongoose = require('mongoose');
const actions = require('mongoose-rest-actions');
const { IncidentType } = require('@codetanzania/emis-incident-type');
const { Point } = require('mongoose-geojson-schemas');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;


/* constants */
const MAX_POPULATION_DEPTH = 1;
const INCIDENT_MODEL_NAME = getString('INCIDENT_MODEL_NAME', 'Incident');
const INCIDENT_COLLECTION_NAME =
  getString('INCIDENT_COLLECTION_NAME', 'incidents');
const SCHEMA_OPTIONS =
  ({ timestamps: true, emitIndexErrors: true, collection: INCIDENT_COLLECTION_NAME });
const OPTION_AUTOPOPULATE = {
  maxDepth: MAX_POPULATION_DEPTH
};


/**
 * @name IncidentSchema
 * @type {Schema}
 * @author lally elias <lallyelias87@gmail.com>
 * @since 0.1.0
 * @version 0.1.0
 * @private
 */
const IncidentSchema = new Schema({
  /**
   * @name incidentType
   * @description An incident type(or nature) under which an incident belongs.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} required - mark required
   * @property {string} ref - referenced collection
   * @property {boolean} index - ensure database index
   * @property {boolean} exists - ensure ref exists before save
   * @property {object} autopopulate - jurisdiction population options
   *
   * @since 0.1.0
   * @version 1.0.0
   * @instance
   */
  incidentType: {
    type: ObjectId,
    required: true,
    ref: IncidentType.MODEL_NAME,
    index: true,
    exists: true,
    autopopulate: {
      select: { nature: 1, family: 1, name: 1, color: 1 },
      maxDepth: MAX_POPULATION_DEPTH
    }
  },


  /**
   * @name name
   * @description Human readable name(or title) of an incident.
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
   * @description A brief summary about an incident i.e additional details
   * that clarify more about an incident.
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
    // required: true,
    index: true,
    searchable: true,
    fake: {
      generator: 'lorem',
      type: 'sentence'
    }
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
      type: 'past'
    }
  },


  /**
   * @name epicentre
   * @description A geo-point that may be considered as the center of
   * an incident.
   *
   * @type {object}
   * @property {object} cetroid - geo json point
   * @property {string} cetroid.type - Point
   * @property {number[]} cetroid.coordinates - longitude, latitude pair of
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
      type: 'recent'
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
 * @description incident schema pre validation hook
 * @param {function} done callback to invoke on success or error
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 0.1.0
 * @version 0.1.0
 * @private
 */
IncidentSchema.pre('validate', function (done) {

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

  // continue
  done();

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
module.exports = mongoose.model(INCIDENT_MODEL_NAME, IncidentSchema);

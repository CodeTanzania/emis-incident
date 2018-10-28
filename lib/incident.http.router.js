'use strict';


/**
 * @apiDefine Incident Incident
 *
 * @apiDescription A representation of an entity which define and track an
 * instance(or occurrence) of an emergency(or disaster) event.
 *
 * @see {@link https://en.wikipedia.org/wiki/Disaster}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since  0.1.0
 * @version 1.0.0
 * @public
 */


/**
 * @apiDefine Incident
 * @apiSuccess {String} _id Unique incident identifier
 * @apiSuccess {Object} incidentType An incident type(or nature) under which
 * an incident belongs.
 * @apiSuccess {String} name Human readable name(or title) of an incident.
 * @apiSuccess {String} [description] A brief summary about an incident i.e
 * additional details that clarify more about an incident.
 * @apiSuccess {Date} [startedAt] Date when an incident was effective
 * occured(or reported).
 * @apiSuccess {Date} [endedAt] Date when an incident was declared no longer
 * a threat.
 * @apiSuccess {Date} createdAt Date when incident was created
 * @apiSuccess {Date} updatedAt Date when incident was last updated
 *
 */


/**
 * @apiDefine Incidents
 * @apiSuccess {Object[]} data List of incidents
 * @apiSuccess {String} data._id Unique incident identifier
 * @apiSuccess {Object} data.incidentType An incident type(or nature) under
 * which an incident belongs.
 * @apiSuccess {String} data.name Human readable name(or title) of an incident.
 * @apiSuccess {String} [data.description] A brief summary about an incident i.e
 * additional details that clarify more about an incident.
 * @apiSuccess {Date} [data.startedAt] Date when an incident was effective
 * occured(or reported).
 * @apiSuccess {Date} [data.endedAt] Date when an incident was declared no longer
 * a threat.
 * @apiSuccess {Number} total Total number of incident
 * @apiSuccess {Number} size Number of incident returned
 * @apiSuccess {Number} limit Query limit used
 * @apiSuccess {Number} skip Query skip/offset used
 * @apiSuccess {Number} page Page number
 * @apiSuccess {Number} pages Total number of pages
 * @apiSuccess {Date} lastModified Date and time at which latest incident
 * was last modified
 *
 */


/**
 * @apiDefine IncidentSuccessResponse
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "_id": "5aeed5f37e422f2743b97eb0",
 *   "incidentType: {
 *    "_id": "5af2fe3ea937a3238bd8e64b",
 *    "name": "Flood"
 *    "nature": "Natural",
 *    "family": "Hydrological",
 *    "color": "#F7EF18",
 *   },
 *   "name": "Nobis",
 *   "description": "Nobis provident aliquam nobis.",
 *   "startedAt": "2018-06-06T10:16:19.230Z",
 *   "endedAt": "2018-06-07T10:16:19.230Z",
 *   "createdAt": "2018-05-06T10:16:19.230Z",
 *   "updatedAt": "2018-05-06T10:16:19.230Z",
 * }
 */


/**
 * @apiDefine IncidentsSuccessResponse
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "data": [
 *    {
 *     "_id": "5aeed5f37e422f2743b97eb0",
 *     "incidentType: {
 *      "_id": "5af2fe3ea937a3238bd8e64b",
 *      "name": "Flood"
 *      "nature": "Natural",
 *      "family": "Hydrological",
 *      "color": "#F7EF18",
 *    },
 *    "name": "Nobis",
 *    "description": "Nobis provident aliquam nobis.",
 *    "startedAt": "2018-06-06T10:16:19.230Z",
 *    "endedAt": "2018-06-07T10:16:19.230Z",
 *    "createdAt": "2018-05-06T10:16:19.230Z",
 *    "updatedAt": "2018-05-06T10:16:19.230Z",
 *   }
 *   ],
 *   "total": 10,
 *   "size": 2,
 *   "limit": 2,
 *   "skip": 0,
 *   "page": 1,
 *   "pages": 5,
 *   "lastModified": "2018-05-06T10:19:04.910Z"
 * }
 */


/* dependencies */
const path = require('path');
const _ = require('lodash');
const { getString } = require('@lykmapipo/env');
const Router = require('@lykmapipo/express-common').Router;


/* local constants */
const API_VERSION = getString('API_VERSION', '1.0.0');
const PATH_LIST = '/incidents';
const PATH_SINGLE = '/incidents/:id';
const PATH_SCHEMA = '/incidents/schema/';


/* declarations */
const Incident = require(path.join(__dirname, 'incident.model'));
const router = new Router({
  version: API_VERSION
});


/**
 * @api {get} /incidents List Incidents
 * @apiVersion 1.0.0
 * @apiName GetIncidents
 * @apiGroup Incident
 * @apiDescription Returns a list of incidents
 * @apiUse RequestHeaders
 * @apiUse Incidents
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse IncidentsSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router.get(PATH_LIST, function getIncidents(request, response, next) {

  // obtain request options
  const options = _.merge({}, request.mquery);

  Incident
    .get(options, function onGetIncidents(error, results) {

      // forward error
      if (error) {
        next(error);
      }

      // handle response
      else {
        response.status(200);
        response.json(results);
      }

    });

});


/**
 * @api {get} /incidents/schema Get Incident Schema
 * @apiVersion 1.0.0
 * @apiName GetIncidentSchema
 * @apiGroup Incident
 * @apiDescription Returns incident json schema definition
 * @apiUse RequestHeaders
 */
router.get(PATH_SCHEMA, function getSchema(request, response) {
  const schema = Incident.jsonSchema();
  response.status(200);
  response.json(schema);
});


/**
 * @api {post} /incidents Create New Incident
 * @apiVersion 1.0.0
 * @apiName PostIncident
 * @apiGroup Incident
 * @apiDescription Create new incident
 * @apiUse RequestHeaders
 * @apiUse Incident
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse IncidentSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router.post(PATH_LIST, function postIncident(request, response, next) {

  // obtain request body
  const body = _.merge({}, request.body);

  Incident
    .post(body, function onPostIncident(error, created) {

      // forward error
      if (error) {
        next(error);
      }

      // handle response
      else {
        response.status(201);
        response.json(created);
      }

    });

});


/**
 * @api {get} /incidents/:id Get Existing Incident
 * @apiVersion 1.0.0
 * @apiName GetIncident
 * @apiGroup Incident
 * @apiDescription Get existing incident
 * @apiUse RequestHeaders
 * @apiUse Incident
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse IncidentSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router.get(PATH_SINGLE, function getIncident(request, response, next) {

  // obtain request options
  const options = _.merge({}, request.mquery);

  // obtain incident id
  options._id = request.params.id;

  Incident
    .getById(options, function onGetIncident(error, found) {

      // forward error
      if (error) {
        next(error);
      }

      // handle response
      else {
        response.status(200);
        response.json(found);
      }

    });

});


/**
 * @api {patch} /incidents/:id Patch Existing Incident
 * @apiVersion 1.0.0
 * @apiName PatchIncident
 * @apiGroup Incident
 * @apiDescription Patch existing incident
 * @apiUse RequestHeaders
 * @apiUse Incident
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse IncidentSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router.patch(PATH_SINGLE, function patchIncident(request, response, next) {

  // obtain incident id
  const { id } = request.params;

  // obtain request body
  const patches = _.merge({}, request.body);

  Incident
    .patch(id, patches, function onPatchIncident(error, patched) {

      // forward error
      if (error) {
        next(error);
      }

      // handle response
      else {
        response.status(200);
        response.json(patched);
      }

    });

});


/**
 * @api {put} /incidents/:id Put Existing Incident
 * @apiVersion 1.0.0
 * @apiName PutIncident
 * @apiGroup Incident
 * @apiDescription Put existing incident
 * @apiUse RequestHeaders
 * @apiUse Incident
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse IncidentSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router.put(PATH_SINGLE, function putIncident(request, response, next) {

  // obtain incident id
  const { id } = request.params;

  // obtain request body
  const updates = _.merge({}, request.body);

  Incident
    .put(id, updates, function onPutIncident(error, updated) {

      // forward error
      if (error) {
        next(error);
      }

      // handle response
      else {
        response.status(200);
        response.json(updated);
      }

    });

});


/**
 * @api {delete} /incidents/:id Delete Existing Incident
 * @apiVersion 1.0.0
 * @apiName DeleteIncident
 * @apiGroup Incident
 * @apiDescription Delete existing incident
 * @apiUse RequestHeaders
 * @apiUse Incident
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse IncidentSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router.delete(PATH_SINGLE, function deleteIncident(request, response, next) {

  // obtain incident id
  const _id = request.params.id;

  // obtain request body
  const patches = _.merge({}, { deletedAt: new Date() });

  Incident
    .patch(_id, patches, function onDeleteIncident(error, deleted) {

      //forward error
      if (error) {
        next(error);
      }

      //handle response
      else {
        response.status(200);
        response.json(deleted);
      }

    });

});


/* expose router */
module.exports = router;

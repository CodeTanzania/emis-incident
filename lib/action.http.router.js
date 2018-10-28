'use strict';


/**
 * @apiDefine Action Action
 *
 * @apiDescription Define a specific action or function performed in
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
 * @since  0.1.0
 * @version 1.0.0
 * @public
 */


/**
 * @apiDefine Action
 * @apiSuccess {String} _id Unique action identifier
 * @apiSuccess {Object} incidentType An incident type(or nature) under which
 * an action belongs.
 * @apiSuccess {Object} incident An incident under which an action is applicable.
 * @apiSuccess {String} [phase=Mitigation] Emergency(or disaster) management
 * phase under which an action is applicable.
 * @apiSuccess {String} name Human readable name(or title) of an action.
 * @apiSuccess {String} [description] A brief summary about an action i.e
 * additional details that clarify what an action is.
 * @apiSuccess {Date} createdAt Date when action was created
 * @apiSuccess {Date} updatedAt Date when action was last updated
 *
 */


/**
 * @apiDefine Actions
 * @apiSuccess {Object[]} data List of actions
 * @apiSuccess {String} data._id Unique action identifier
 * @apiSuccess {Object} data.incidentType An incident type(or nature) under
 * which an action belongs.
 * @apiSuccess {Object} data.incident An incident under which a action is
 * applicable.
 * @apiSuccess {String} [data.phase=Mitigation] Emergency(or disaster) management
 * phase under which an action is applicable.
 * @apiSuccess {String} data.name Human readable name(or title) of an action.
 * @apiSuccess {String} [data.description] A brief summary about an action i.e
 * additional details that clarify what an action is.
 * @apiSuccess {Date} data.createdAt Date when action was created
 * @apiSuccess {Date} data.updatedAt Date when action was last updated
 * @apiSuccess {Number} total Total number of actions
 * @apiSuccess {Number} size Number of actions returned
 * @apiSuccess {Number} limit Query limit used
 * @apiSuccess {Number} skip Query skip/offset used
 * @apiSuccess {Number} page Page number
 * @apiSuccess {Number} pages Total number of pages
 * @apiSuccess {Date} lastModified Date and time at which latest actions
 * was last modified
 *
 */


/**
 * @apiDefine ActionSuccessResponse
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
 *   "incident: {
 *    "_id": "5af2fe3ea937a3238bd8e64b",
 *    "name": "Nobis",
 *    "startedAt": "2018-06-06T10:16:19.230Z",
 *    "endedAt": "2018-06-07T10:16:19.230Z",
 *   },
 *   "phase": "Mitigation",
 *   "name": "Provident aliquam",
 *   "description": "Nobis provident aliquam nobis.",
 *   "createdAt": "2018-05-06T10:16:19.230Z",
 *   "updatedAt": "2018-05-06T10:16:19.230Z",
 * }
 */


/**
 * @apiDefine ActionsSuccessResponse
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "data": [
 *     {
 *       "_id": "5aeed5f37e422f2743b97eb0",
 *       "incidentType: {
 *         "_id": "5af2fe3ea937a3238bd8e64b",
 *         "name": "Flood"
 *         "nature": "Natural",
 *         "family": "Hydrological",
 *         "color": "#F7EF18",
 *       },
 *       "incident: {
 *         "_id": "5af2fe3ea937a3238bd8e64b",
 *         "name": "Nobis",
 *         "startedAt": "2018-06-06T10:16:19.230Z",
 *         "endedAt": "2018-06-07T10:16:19.230Z",
 *       },
 *       "phase": "Mitigation",
 *       "name": "Provident aliquam",
 *       "description": "Nobis provident aliquam nobis.",
 *       "createdAt": "2018-05-06T10:16:19.230Z",
 *       "updatedAt": "2018-05-06T10:16:19.230Z",
 *    }
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
const PATH_LIST = '/actions';
const PATH_SINGLE = '/actions/:id';
const PATH_SCHEMA = '/actions/schema/';


/* declarations */
const Action = require(path.join(__dirname, 'action.model'));
const router = new Router({
  version: API_VERSION
});


/**
 * @api {get} /actions List Actions
 * @apiVersion 1.0.0
 * @apiName GetActions
 * @apiGroup Action
 * @apiDescription Returns a list of actions
 * @apiUse RequestHeaders
 * @apiUse Actions
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse ActionsSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router.get(PATH_LIST, function getActions(request, response, next) {

  // obtain request options
  const options = _.merge({}, request.mquery);

  Action
    .get(options, function onGetActions(error, results) {

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
 * @api {get} /actions/schema Get Action Schema
 * @apiVersion 1.0.0
 * @apiName GetActionSchema
 * @apiGroup Action
 * @apiDescription Returns incident json schema definition
 * @apiUse RequestHeaders
 */
router.get(PATH_SCHEMA, function getSchema(request, response) {
  const schema = Action.jsonSchema();
  response.status(200);
  response.json(schema);
});


/**
 * @api {post} /actions Create New Action
 * @apiVersion 1.0.0
 * @apiName PostAction
 * @apiGroup Action
 * @apiDescription Create new incident
 * @apiUse RequestHeaders
 * @apiUse Action
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse ActionSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router.post(PATH_LIST, function postAction(request, response, next) {

  // obtain request body
  const body = _.merge({}, request.body);

  Action
    .post(body, function onPostAction(error, created) {

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
 * @api {get} /actions/:id Get Existing Action
 * @apiVersion 1.0.0
 * @apiName GetAction
 * @apiGroup Action
 * @apiDescription Get existing incident
 * @apiUse RequestHeaders
 * @apiUse Action
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse ActionSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router.get(PATH_SINGLE, function getAction(request, response, next) {

  // obtain request options
  const options = _.merge({}, request.mquery);

  // obtain incident id
  options._id = request.params.id;

  Action
    .getById(options, function onGetAction(error, found) {

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
 * @api {patch} /actions/:id Patch Existing Action
 * @apiVersion 1.0.0
 * @apiName PatchAction
 * @apiGroup Action
 * @apiDescription Patch existing incident
 * @apiUse RequestHeaders
 * @apiUse Action
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse ActionSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router.patch(PATH_SINGLE, function patchAction(request, response, next) {

  // obtain incident id
  const { id } = request.params;

  // obtain request body
  const patches = _.merge({}, request.body);

  Action
    .patch(id, patches, function onPatchAction(error, patched) {

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
 * @api {put} /actions/:id Put Existing Action
 * @apiVersion 1.0.0
 * @apiName PutAction
 * @apiGroup Action
 * @apiDescription Put existing incident
 * @apiUse RequestHeaders
 * @apiUse Action
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse ActionSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router.put(PATH_SINGLE, function putAction(request, response, next) {

  // obtain incident id
  const { id } = request.params;

  // obtain request body
  const updates = _.merge({}, request.body);

  Action
    .put(id, updates, function onPutAction(error, updated) {

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
 * @api {delete} /actions/:id Delete Existing Action
 * @apiVersion 1.0.0
 * @apiName DeleteAction
 * @apiGroup Action
 * @apiDescription Delete existing incident
 * @apiUse RequestHeaders
 * @apiUse Action
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse ActionSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router.delete(PATH_SINGLE, function deleteAction(request, response, next) {

  // obtain incident id
  const _id = request.params.id;

  // obtain request body
  const patches = _.merge({}, { deletedAt: new Date() });

  Action
    .patch(_id, patches, function onDeleteAction(error, deleted) {

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

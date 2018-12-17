'use strict';


/**
 * @apiDefine Task Task
 *
 * @apiDescription Describe a specific task or step. It specified way to carry
 * out an action.
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since  0.1.0
 * @version 1.0.0
 * @public
 */


/**
 * @apiDefine Task
 * @apiSuccess {String} _id Unique task identifier
 * @apiSuccess {IncidentType} incidentType An incident type(or nature) under
 * which a task belongs.
 * @apiSuccess {Incident} incident An incident under which a task is applicable.
 * @apiSuccess {Action} action An action under which a task is applicable.
 * @apiSuccess {String} [phase=Mitigation] Emergency(or disaster) management
 * phase under which a task is applicable.
 * @apiSuccess {String} name Human readable name(or title) of a task.
 * @apiSuccess {String} [description] A brief summary about a task i.e
 * additional details that clarify what a task is.
 * @apiSuccess {Number} number Task number(or sequence) for ordering in
 * relation to other action tasks.
 * @apiSuccess {Date} createdAt Date when task was created
 * @apiSuccess {Date} updatedAt Date when task was last updated
 *
 */


/**
 * @apiDefine Tasks
 * @apiSuccess {Object[]} data List of tasks
 * @apiSuccess {String} data._id Unique action identifier
 * @apiSuccess {IncidenType} data.incidentType An incident type(or nature) under
 * which a task belongs.
 * @apiSuccess {Incident} data.incident An incident under which a task is
 * applicable.
 * @apiSuccess {Action} data.action An action under which a task is applicable.
 * @apiSuccess {String} [data.phase=Mitigation] Emergency(or disaster) management
 * phase under which a task is applicable.
 * @apiSuccess {String} data.name Human readable name(or title) of a task.
 * @apiSuccess {String} [data.description] A brief summary about a task i.e
 * additional details that clarify what a task is.
 * @apiSuccess {Number} data.number Task number(or sequence) for ordering in
 * relation to other action tasks.
 * @apiSuccess {Date} data.createdAt Date when task was created
 * @apiSuccess {Date} data.updatedAt Date when task was last updated
 * @apiSuccess {Number} total Total number of tasks
 * @apiSuccess {Number} size Number of tasks returned
 * @apiSuccess {Number} limit Query limit used
 * @apiSuccess {Number} skip Query skip/offset used
 * @apiSuccess {Number} page Page number
 * @apiSuccess {Number} pages Total number of pages
 * @apiSuccess {Date} lastModified Date and time at which latest tasks
 * was last modified
 *
 */


/**
 * @apiDefine TaskSuccessResponse
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "_id": "5aeed5f37e422f2743b97eb0",
 *   "incidentType": {
 *    "_id": "5af2fe3ea937a3238bd8e64b",
 *    "name": "Flood"
 *    "nature": "Natural",
 *    "family": "Hydrological",
 *    "color": "#F7EF18",
 *   },
 *   "incident": {
 *    "_id": "5af2fe3ea937a3238bd8e64b",
 *    "name": "Nobis",
 *    "startedAt": "2018-06-06T10:16:19.230Z",
 *    "endedAt": "2018-06-07T10:16:19.230Z",
 *   },
 *   "action": {
 *    "_id": "5af2fe3ea937a3238bd8e64b",
 *    "name": "Aliquam Nobis",
 *   },
 *   "phase": "Mitigation",
 *   "name": "Provident aliquam",
 *   "description": "Nobis provident aliquam nobis.",
 *   "number": 1,
 *   "createdAt": "2018-05-06T10:16:19.230Z",
 *   "updatedAt": "2018-05-06T10:16:19.230Z",
 * }
 */


/**
 * @apiDefine TasksSuccessResponse
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "data": [
 *     {
 *       "_id": "5aeed5f37e422f2743b97eb0",
 *       "incidentType": {
 *         "_id": "5af2fe3ea937a3238bd8e64b",
 *         "name": "Flood"
 *         "nature": "Natural",
 *         "family": "Hydrological",
 *         "color": "#F7EF18",
 *       },
 *       "incident": {
 *         "_id": "5af2fe3ea937a3238bd8e64b",
 *         "name": "Nobis",
 *         "startedAt": "2018-06-06T10:16:19.230Z",
 *         "endedAt": "2018-06-07T10:16:19.230Z",
 *       },
 *       "action": {
 *         "_id": "5af2fe3ea937a3238bd8e64b",
 *         "name": "Aliquam Nobis",
 *       },
 *       "phase": "Mitigation",
 *       "name": "Provident aliquam",
 *       "description": "Nobis provident aliquam nobis.",
 *       "number": 1,
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
const _ = require('lodash');
const { getString } = require('@lykmapipo/env');
const { include } = require('@lykmapipo/include');
const Router = require('@lykmapipo/express-common').Router;


/* local constants */
const API_VERSION = getString('API_VERSION', '1.0.0');
const PATH_LIST = '/tasks';
const PATH_SINGLE = '/tasks/:id';
const PATH_SCHEMA = '/tasks/schema/';


/* declarations */
const Task = include(__dirname, 'task.model');
const router = new Router({
  version: API_VERSION
});


/**
 * @api {get} /tasks List Tasks
 * @apiVersion 1.0.0
 * @apiName GetTasks
 * @apiGroup Task
 * @apiDescription Returns a list of tasks
 * @apiUse RequestHeaders
 * @apiUse Tasks
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse TasksSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router.get(PATH_LIST, function getTasks(request, response, next) {

  // obtain request options
  const options = _.merge({}, request.mquery);

  Task
    .get(options, function onGetTasks(error, results) {

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
 * @api {get} /tasks/schema Get Task Schema
 * @apiVersion 1.0.0
 * @apiName GetTaskSchema
 * @apiGroup Task
 * @apiDescription Returns incident json schema definition
 * @apiUse RequestHeaders
 */
router.get(PATH_SCHEMA, function getSchema(request, response) {
  const schema = Task.jsonSchema();
  response.status(200);
  response.json(schema);
});


/**
 * @api {post} /tasks Create New Task
 * @apiVersion 1.0.0
 * @apiName PostTask
 * @apiGroup Task
 * @apiDescription Create new incident
 * @apiUse RequestHeaders
 * @apiUse Task
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse TaskSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router.post(PATH_LIST, function postTask(request, response, next) {

  // obtain request body
  const body = _.merge({}, request.body);

  Task
    .post(body, function onPostTask(error, created) {

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
 * @api {get} /tasks/:id Get Existing Task
 * @apiVersion 1.0.0
 * @apiName GetTask
 * @apiGroup Task
 * @apiDescription Get existing incident
 * @apiUse RequestHeaders
 * @apiUse Task
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse TaskSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router.get(PATH_SINGLE, function getTask(request, response, next) {

  // obtain request options
  const options = _.merge({}, request.mquery);

  // obtain incident id
  options._id = request.params.id;

  Task
    .getById(options, function onGetTask(error, found) {

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
 * @api {patch} /tasks/:id Patch Existing Task
 * @apiVersion 1.0.0
 * @apiName PatchTask
 * @apiGroup Task
 * @apiDescription Patch existing incident
 * @apiUse RequestHeaders
 * @apiUse Task
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse TaskSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router.patch(PATH_SINGLE, function patchTask(request, response, next) {

  // obtain incident id
  const { id } = request.params;

  // obtain request body
  const patches = _.merge({}, request.body);

  Task
    .patch(id, patches, function onPatchTask(error, patched) {

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
 * @api {put} /tasks/:id Put Existing Task
 * @apiVersion 1.0.0
 * @apiName PutTask
 * @apiGroup Task
 * @apiDescription Put existing incident
 * @apiUse RequestHeaders
 * @apiUse Task
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse TaskSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router.put(PATH_SINGLE, function putTask(request, response, next) {

  // obtain incident id
  const { id } = request.params;

  // obtain request body
  const updates = _.merge({}, request.body);

  Task
    .put(id, updates, function onPutTask(error, updated) {

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
 * @api {delete} /tasks/:id Delete Existing Task
 * @apiVersion 1.0.0
 * @apiName DeleteTask
 * @apiGroup Task
 * @apiDescription Delete existing incident
 * @apiUse RequestHeaders
 * @apiUse Task
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse TaskSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router.delete(PATH_SINGLE, function deleteTask(request, response, next) {

  // obtain incident id
  const _id = request.params.id;

  // obtain request body
  const patches = _.merge({}, { deletedAt: new Date() });

  Task
    .patch(_id, patches, function onDeleteTask(error, deleted) {

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

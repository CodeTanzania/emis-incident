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
 * @example
 *
 * const { app } = require('@codetanzania/emis-incident');
 * app.start((error, env) => {...});
 *
 */

/* dependencies */
const _ = require('lodash');
const { include } = require('@lykmapipo/include');
const app = require('@lykmapipo/express-common');
const pkg = include(__dirname, 'package.json');
const Incident = include(__dirname, 'lib', 'incident.model');
const Action = include(__dirname, 'lib', 'action.model');
const Task = include(__dirname, 'lib', 'task.model');
const incidentRouter = include(__dirname, 'lib', 'incident.http.router');
const actionRouter = include(__dirname, 'lib', 'action.http.router');
const taskRouter = include(__dirname, 'lib', 'task.http.router');

/**
 * @name info
 * @description package information
 * @type {Object}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.0.0
 * @version 0.1.0
 */
exports.info = _.merge(
  {},
  _.pick(pkg, [
    'name',
    'description',
    'version',
    'license',
    'homepage',
    'repository',
    'bugs',
    'sandbox',
    'contributors',
  ])
);

/**
 * @name Incident
 * @description Incident model
 * @type {mongoose.Model}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.0.0
 * @version 0.1.0
 */
exports.Incident = Incident;

/**
 * @name Action
 * @description Action model
 * @type {mongoose.Model}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.0.0
 * @version 0.1.0
 */
exports.Action = Action;

/**
 * @name Task
 * @description Task model
 * @type {mongoose.Model}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.0.0
 * @version 0.1.0
 */
exports.Task = Task;

/**
 * @name incidentRouter
 * @description incident http router
 * @type {express.Router}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.0.0
 * @version 0.1.0
 */
exports.incidentRouter = incidentRouter;

/**
 * @name actionRouter
 * @description action http router
 * @type {express.Router}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.0.0
 * @version 0.1.0
 */
exports.actionRouter = actionRouter;

/**
 * @name taskRouter
 * @description task http router
 * @type {express.Router}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.0.0
 * @version 0.1.0
 */
exports.taskRouter = taskRouter;

/**
 * @name apiVersion
 * @description http router api version
 * @type {String}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.0.0
 * @version 0.1.0
 */
exports.apiVersion = incidentRouter.apiVersion;

/* export app */
Object.defineProperty(exports, 'app', {
  get() {
    /* @todo bind oauth middlewares authenticate, token, authorize */
    app.mount(incidentRouter);
    app.mount(actionRouter);
    app.mount(taskRouter);
    return app;
  },
});

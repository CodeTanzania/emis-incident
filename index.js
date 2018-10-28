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
const path = require('path');
const _ = require('lodash');
const app = require('@lykmapipo/express-common');
const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);


/* declarations */
const pkg = require(path.join(__dirname, 'package.json'));
const fields = [
  'name',
  'description',
  'version',
  'license',
  'homepage',
  'repository',
  'bugs',
  'sandbox',
  'contributors'
];


/* extract information from package.json */
const info = _.merge({}, _.pick(pkg, fields));


/* export package(module) info */
exports.info = info;


/* import models */
const Incident = require(path.join(__dirname, 'lib', 'incident.model'));
const Action = require(path.join(__dirname, 'lib', 'action.model'));
const Task = require(path.join(__dirname, 'lib', 'task.model'));


/* export models */
exports.Incident = Incident;
exports.Action = Action;
exports.Task = Task;


/* import routers */
const incidentRouter =
  require(path.join(__dirname, 'lib', 'incident.http.router'));
const actionRouter =
  require(path.join(__dirname, 'lib', 'action.http.router'));
const taskRouter =
  require(path.join(__dirname, 'lib', 'task.http.router'));


/* export incident router */
exports.incidentRouter = incidentRouter;
exports.actionRouter = actionRouter;
exports.taskRouter = taskRouter;


/* export app */
Object.defineProperty(exports, 'app', {
  get() {
    /* @todo bind oauth middlewares authenticate, token, authorize */
    app.mount(incidentRouter);
    app.mount(actionRouter);
    app.mount(taskRouter);
    return app;
  }
});

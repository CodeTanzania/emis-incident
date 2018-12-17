'use strict';


/* ensure mongodb uri */
process.env.MONGODB_URI =
  (process.env.MONGODB_URI || 'mongodb://localhost/emis-incident');


/* dependencies */
const path = require('path');
const _ = require('lodash');
const async = require('async');
const mongoose = require('mongoose');
const {
  IncidentType,
  incidentTypeRouter
} =
require('@codetanzania/emis-incident-type');
const {
  Incident,
  Action,
  Task,
  info,
  app
} = require(path.join(__dirname, '..'));
app.mount(incidentTypeRouter);


/* establish mongodb connection */
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });


function boot() {

  async.waterfall([

    function clearTasks(next) {
      Task.deleteMany(function ( /*error, results*/ ) {
        next();
      });
    },

    function clearActions(next) {
      Action.deleteMany(function ( /*error, results*/ ) {
        next();
      });
    },

    function clearIncidents(next) {
      Incident.deleteMany(function ( /*error, results*/ ) {
        next();
      });
    },

    function seedIncidentTypes(next) {
      IncidentType.seed(next);
    },

    function seedIncidents(incidentTypes, next) {
      const incidents = Incident.fake(incidentTypes.length);
      _.forEach(incidentTypes, function (incidentType, index) {
        incidents[index].type = incidentType;
      });
      Incident.insertMany(incidents, next);
    },

    function seedActions(incidents, next) {
      const actions = Action.fake(incidents.length);
      _.forEach(incidents, function (incident, index) {
        actions[index].incident = incident;
      });
      Action.insertMany(actions, next);
    },

    function seedTasks(actions, next) {
      const tasks = Task.fake(actions.length);
      _.forEach(actions, function (action, index) {
        tasks[index].action = action;
        tasks[index].number = (index % 2) + 1;
      });
      Task.insertMany(tasks, next);
    }

  ], function (error, results) {
    console.log(error);

    /* expose module info */
    app.get('/', function (request, response) {
      response.status(200);
      response.json(info);
    });

    /* fire the app */
    app.start(function (error, env) {
      console.log(`visit http://0.0.0.0:${env.PORT}`);
    });

  });

}

boot();

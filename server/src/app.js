const express = require('express');

const _app = express();
const path = require('path');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const surveyReader = require('./surveys/surveyReader');

_app.use(bodyParser.json()); // support json encoded bodies
_app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
_app.use('/static', express.static(path.join(__dirname, '../../build/static')));
_app.use(favicon(path.join(__dirname, '../../build/favicon.ico')));

_app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../../build/index.html`));
});

function onGetSurveyConfig(req, res) {
  let env = process.env.NODE_ENV;

  if (req.query && req.query.env) {
    env = req.query.env;
  }

  res.json(surveyReader.readSurveyConfig(env));
}

async function app(dbClient) {
  _app.post('/api/survey', (req, res) => onPostSurveyResult(dbClient, req, res));
  _app.post('/api/feedback', (req, res) => onPostFeedback(dbClient, req, res));
  _app.get('/api/surveyconfig', (req, res) => onGetSurveyConfig(req, res));
  return _app;
}

async function onPostFeedback(db, req, res) {
  try {
    const date = new Date().toISOString();
    const feedback = {
      ...req.body,
      date,
    };

    await db.collection('feedbacks').insertOne(feedback);
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}

async function onPostSurveyResult(db, req, res) {
  try {
    const date = new Date().toISOString();
    const surveyResult = {
      ...req.body,
      date,
    };

    await db.collection('userscores').insertOne(surveyResult);
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}

module.exports = app;

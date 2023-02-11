const express = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const Card = require('../views/Card');
const Home = require('../views/Home');

const router = express.Router();
const Die = require('../db/models/die');

/* GET home page. */
router.get('/', (req, res) => {
  const home = React.createElement(Home, req.app.locals);
  const html = ReactDOMServer.renderToStaticMarkup(home);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

// TODO: изменить данный маршрутизатор с использованием AJAX
router.post('/rolls', async (req, res) => {
  const die = new Die(Number(req.body.sides));
  const card = React.createElement(Card, {
    die,
    roll: die.roll(),
  });
  const html = ReactDOMServer.renderToStaticMarkup(card);
  return res.send(html);
});

module.exports = router;

/* eslint-disable linebreak-style */
const React = require('react');
const Home = require('./Home');

module.exports = function Card({ die, roll }) {
  return (
    <div id="die-container">
      {die && (
        <div className="die">
          <span className="roll">{roll}</span>
        </div>
      )}
    </div>
  );
};

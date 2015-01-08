var React = require('react');
var Header = require('./Header.react');
var NavBar = require('./NavBar.react');
var DateInput = require('./DateInput.react');
var Donut = require('./Donut.react');
var LineChart = require('./LineChart.react');
var BarChart = require('./BarChart.react');
var Footer = require('./Footer.react');

var App = React.createClass({
  render: function() {
    return (
      <div id="background">
        <Header />
        <NavBar />
        <div id="wrapper">
          <DateInput />
          <Donut />
          <LineChart />
          <BarChart />
          <Footer />
        </div>
      </div>
    );
  }
});

module.exports = App;

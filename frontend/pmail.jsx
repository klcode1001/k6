var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    hashHistory = require('history').createHashHistory();

var App = React.createClass({
  render: function () {
    return (
      <div>
        This is the third and last temporary test of javascript stuff.
      </div>
    );
  }
});

var router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(router, document.getElementById('root'));
});

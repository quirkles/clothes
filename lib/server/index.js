"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = 3000;
app.use(_express["default"].json());
app.get('/', function (req, res) {
  return res.json({
    message: 'Hello World'
  });
});
app.listen(port, function () {
  return console.log("Example app listening on port ".concat(port, "!"));
});
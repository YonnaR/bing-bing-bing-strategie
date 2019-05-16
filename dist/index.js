"use strict";
exports.__esModule = true;
var App_1 = require("./App");
//launch app on env port
App_1["default"].listen(process.env.PORT, function () {
    console.log('Express server listening on port ' + process.env.PORT);
});

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHostEnvName = getHostEnvName;
exports.setHostEnvName = setHostEnvName;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _cliPaths = require('../clients/cli-paths');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const serverEnvNamePath = _path2.default.join((0, _cliPaths.getLocalStoragePathSync)(), 'server-env');

function getHostEnvName() {
  try {
    return _fsExtra2.default.readFileSync(serverEnvNamePath, 'utf8');
  } catch (err) {
    return 'production';
  }
}

async function setHostEnvName(name) {
  await _fsExtra2.default.writeFile(serverEnvNamePath, name);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGllbnRzL3NlcnZlci1lbnYuanMiXSwibmFtZXMiOlsiZ2V0SG9zdEVudk5hbWUiLCJzZXRIb3N0RW52TmFtZSIsInNlcnZlckVudk5hbWVQYXRoIiwicGF0aCIsImpvaW4iLCJmcyIsInJlYWRGaWxlU3luYyIsImVyciIsIm5hbWUiLCJ3cml0ZUZpbGUiXSwibWFwcGluZ3MiOiI7Ozs7O1FBTWdCQSxjLEdBQUFBLGM7UUFRTUMsYyxHQUFBQSxjOztBQWR0Qjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQSxNQUFNQyxvQkFBb0JDLGVBQUtDLElBQUwsQ0FBVSx3Q0FBVixFQUFxQyxZQUFyQyxDQUExQjs7QUFFTyxTQUFTSixjQUFULEdBQTBCO0FBQy9CLE1BQUk7QUFDRixXQUFPSyxrQkFBR0MsWUFBSCxDQUFnQkosaUJBQWhCLEVBQW1DLE1BQW5DLENBQVA7QUFDRCxHQUZELENBRUUsT0FBT0ssR0FBUCxFQUFZO0FBQ1osV0FBTyxZQUFQO0FBQ0Q7QUFDRjs7QUFFTSxlQUFlTixjQUFmLENBQThCTyxJQUE5QixFQUFvQztBQUN6QyxRQUFNSCxrQkFBR0ksU0FBSCxDQUFhUCxpQkFBYixFQUFnQ00sSUFBaEMsQ0FBTjtBQUNEIiwiZmlsZSI6InNlcnZlci1lbnYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IGZzIGZyb20gJ2ZzLWV4dHJhJztcclxuaW1wb3J0IHsgZ2V0TG9jYWxTdG9yYWdlUGF0aFN5bmMgfSBmcm9tICcuLi9jbGllbnRzL2NsaS1wYXRocyc7XHJcblxyXG5jb25zdCBzZXJ2ZXJFbnZOYW1lUGF0aCA9IHBhdGguam9pbihnZXRMb2NhbFN0b3JhZ2VQYXRoU3luYygpLCAnc2VydmVyLWVudicpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEhvc3RFbnZOYW1lKCkge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gZnMucmVhZEZpbGVTeW5jKHNlcnZlckVudk5hbWVQYXRoLCAndXRmOCcpO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgcmV0dXJuICdwcm9kdWN0aW9uJztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXRIb3N0RW52TmFtZShuYW1lKSB7XHJcbiAgYXdhaXQgZnMud3JpdGVGaWxlKHNlcnZlckVudk5hbWVQYXRoLCBuYW1lKTtcclxufVxyXG4iXX0=
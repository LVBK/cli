'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTheme = createTheme;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _extension = require('../services/extension');

var _extensionTemplate = require('../services/extension-template');

var _diff = require('../services/diff');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const themeUrls = {
  theme: 'https://raw.githubusercontent.com/shoutem/extensions/master/shoutem.rubicon-theme/app/themes/Rubicon.js',
  variables: 'https://raw.githubusercontent.com/shoutem/extensions/master/shoutem.rubicon-theme/server/primeThemeVariables.json'
};

async function promptThemeDetails(themeName) {
  console.log('Enter theme information.');
  const questions = [{
    message: 'Title',
    name: 'title',
    default: _lodash2.default.upperFirst(themeName),
    type: 'input'
  }, {
    message: 'Description',
    name: 'description',
    type: 'input'
  }];

  return await _inquirer2.default.prompt(questions);
}

async function getThemeVariablesContent(themeName) {
  const templateJson = await (0, _requestPromise2.default)({ url: themeUrls.variables, json: true });
  templateJson.title = themeName;

  return JSON.stringify(templateJson, null, 2);
}

async function createTheme(themeName) {
  const { title, description } = await promptThemeDetails(_lodash2.default.upperFirst(_lodash2.default.camelCase(themeName)));

  const themeContent = await (0, _requestPromise2.default)(themeUrls.theme);
  const themeVariablesContent = await getThemeVariablesContent(themeName);

  await (0, _diff.offerChanges)((await (0, _extensionTemplate.instantiateExtensionTemplate)('theme', {
    extensionPath: (0, _extension.ensureInExtensionDir)(),
    title,
    themeName,
    description,
    themeContent,
    themeVariablesContent
  })));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy90aGVtZS5qcyJdLCJuYW1lcyI6WyJjcmVhdGVUaGVtZSIsInRoZW1lVXJscyIsInRoZW1lIiwidmFyaWFibGVzIiwicHJvbXB0VGhlbWVEZXRhaWxzIiwidGhlbWVOYW1lIiwiY29uc29sZSIsImxvZyIsInF1ZXN0aW9ucyIsIm1lc3NhZ2UiLCJuYW1lIiwiZGVmYXVsdCIsIl8iLCJ1cHBlckZpcnN0IiwidHlwZSIsImlucXVpcmVyIiwicHJvbXB0IiwiZ2V0VGhlbWVWYXJpYWJsZXNDb250ZW50IiwidGVtcGxhdGVKc29uIiwidXJsIiwianNvbiIsInRpdGxlIiwiSlNPTiIsInN0cmluZ2lmeSIsImRlc2NyaXB0aW9uIiwiY2FtZWxDYXNlIiwidGhlbWVDb250ZW50IiwidGhlbWVWYXJpYWJsZXNDb250ZW50IiwiZXh0ZW5zaW9uUGF0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFtQ3NCQSxXLEdBQUFBLFc7O0FBbkN0Qjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLE1BQU1DLFlBQVk7QUFDaEJDLFNBQU8seUdBRFM7QUFFaEJDLGFBQVc7QUFGSyxDQUFsQjs7QUFLQSxlQUFlQyxrQkFBZixDQUFrQ0MsU0FBbEMsRUFBNkM7QUFDM0NDLFVBQVFDLEdBQVIsQ0FBWSwwQkFBWjtBQUNBLFFBQU1DLFlBQVksQ0FBQztBQUNqQkMsYUFBUyxPQURRO0FBRWpCQyxVQUFNLE9BRlc7QUFHakJDLGFBQVNDLGlCQUFFQyxVQUFGLENBQWFSLFNBQWIsQ0FIUTtBQUlqQlMsVUFBTTtBQUpXLEdBQUQsRUFLZjtBQUNETCxhQUFTLGFBRFI7QUFFREMsVUFBTSxhQUZMO0FBR0RJLFVBQU07QUFITCxHQUxlLENBQWxCOztBQVdBLFNBQU8sTUFBTUMsbUJBQVNDLE1BQVQsQ0FBZ0JSLFNBQWhCLENBQWI7QUFDRDs7QUFFRCxlQUFlUyx3QkFBZixDQUF3Q1osU0FBeEMsRUFBbUQ7QUFDakQsUUFBTWEsZUFBZSxNQUFNLDhCQUFRLEVBQUVDLEtBQUtsQixVQUFVRSxTQUFqQixFQUE0QmlCLE1BQU0sSUFBbEMsRUFBUixDQUEzQjtBQUNBRixlQUFhRyxLQUFiLEdBQXFCaEIsU0FBckI7O0FBRUEsU0FBT2lCLEtBQUtDLFNBQUwsQ0FBZUwsWUFBZixFQUE2QixJQUE3QixFQUFtQyxDQUFuQyxDQUFQO0FBQ0Q7O0FBRU0sZUFBZWxCLFdBQWYsQ0FBMkJLLFNBQTNCLEVBQXNDO0FBQzNDLFFBQU0sRUFBRWdCLEtBQUYsRUFBU0csV0FBVCxLQUF5QixNQUFNcEIsbUJBQW1CUSxpQkFBRUMsVUFBRixDQUFhRCxpQkFBRWEsU0FBRixDQUFZcEIsU0FBWixDQUFiLENBQW5CLENBQXJDOztBQUVBLFFBQU1xQixlQUFlLE1BQU0sOEJBQVF6QixVQUFVQyxLQUFsQixDQUEzQjtBQUNBLFFBQU15Qix3QkFBd0IsTUFBTVYseUJBQXlCWixTQUF6QixDQUFwQzs7QUFFQSxRQUFNLHlCQUFhLE1BQU0scURBQTZCLE9BQTdCLEVBQXNDO0FBQzdEdUIsbUJBQWUsc0NBRDhDO0FBRTdEUCxTQUY2RDtBQUc3RGhCLGFBSDZEO0FBSTdEbUIsZUFKNkQ7QUFLN0RFLGdCQUw2RDtBQU03REM7QUFONkQsR0FBdEMsQ0FBbkIsRUFBTjtBQVFEIiwiZmlsZSI6InRoZW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IGlucXVpcmVyIGZyb20gJ2lucXVpcmVyJztcclxuaW1wb3J0IHJlcXVlc3QgZnJvbSAncmVxdWVzdC1wcm9taXNlJztcclxuaW1wb3J0IHsgZW5zdXJlSW5FeHRlbnNpb25EaXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9leHRlbnNpb24nO1xyXG5pbXBvcnQge2luc3RhbnRpYXRlRXh0ZW5zaW9uVGVtcGxhdGV9IGZyb20gXCIuLi9zZXJ2aWNlcy9leHRlbnNpb24tdGVtcGxhdGVcIjtcclxuaW1wb3J0IHtvZmZlckNoYW5nZXN9IGZyb20gXCIuLi9zZXJ2aWNlcy9kaWZmXCI7XHJcblxyXG5jb25zdCB0aGVtZVVybHMgPSB7XHJcbiAgdGhlbWU6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vc2hvdXRlbS9leHRlbnNpb25zL21hc3Rlci9zaG91dGVtLnJ1Ymljb24tdGhlbWUvYXBwL3RoZW1lcy9SdWJpY29uLmpzJyxcclxuICB2YXJpYWJsZXM6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vc2hvdXRlbS9leHRlbnNpb25zL21hc3Rlci9zaG91dGVtLnJ1Ymljb24tdGhlbWUvc2VydmVyL3ByaW1lVGhlbWVWYXJpYWJsZXMuanNvbidcclxufTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHByb21wdFRoZW1lRGV0YWlscyh0aGVtZU5hbWUpIHtcclxuICBjb25zb2xlLmxvZygnRW50ZXIgdGhlbWUgaW5mb3JtYXRpb24uJyk7XHJcbiAgY29uc3QgcXVlc3Rpb25zID0gW3tcclxuICAgIG1lc3NhZ2U6ICdUaXRsZScsXHJcbiAgICBuYW1lOiAndGl0bGUnLFxyXG4gICAgZGVmYXVsdDogXy51cHBlckZpcnN0KHRoZW1lTmFtZSksXHJcbiAgICB0eXBlOiAnaW5wdXQnLFxyXG4gIH0sIHtcclxuICAgIG1lc3NhZ2U6ICdEZXNjcmlwdGlvbicsXHJcbiAgICBuYW1lOiAnZGVzY3JpcHRpb24nLFxyXG4gICAgdHlwZTogJ2lucHV0JyxcclxuICB9XTtcclxuXHJcbiAgcmV0dXJuIGF3YWl0IGlucXVpcmVyLnByb21wdChxdWVzdGlvbnMpXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFRoZW1lVmFyaWFibGVzQ29udGVudCh0aGVtZU5hbWUpIHtcclxuICBjb25zdCB0ZW1wbGF0ZUpzb24gPSBhd2FpdCByZXF1ZXN0KHsgdXJsOiB0aGVtZVVybHMudmFyaWFibGVzLCBqc29uOiB0cnVlIH0pO1xyXG4gIHRlbXBsYXRlSnNvbi50aXRsZSA9IHRoZW1lTmFtZTtcclxuXHJcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRlbXBsYXRlSnNvbiwgbnVsbCwgMik7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVUaGVtZSh0aGVtZU5hbWUpIHtcclxuICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiB9ID0gYXdhaXQgcHJvbXB0VGhlbWVEZXRhaWxzKF8udXBwZXJGaXJzdChfLmNhbWVsQ2FzZSh0aGVtZU5hbWUpKSk7XHJcblxyXG4gIGNvbnN0IHRoZW1lQ29udGVudCA9IGF3YWl0IHJlcXVlc3QodGhlbWVVcmxzLnRoZW1lKTtcclxuICBjb25zdCB0aGVtZVZhcmlhYmxlc0NvbnRlbnQgPSBhd2FpdCBnZXRUaGVtZVZhcmlhYmxlc0NvbnRlbnQodGhlbWVOYW1lKTtcclxuXHJcbiAgYXdhaXQgb2ZmZXJDaGFuZ2VzKGF3YWl0IGluc3RhbnRpYXRlRXh0ZW5zaW9uVGVtcGxhdGUoJ3RoZW1lJywge1xyXG4gICAgZXh0ZW5zaW9uUGF0aDogZW5zdXJlSW5FeHRlbnNpb25EaXIoKSxcclxuICAgIHRpdGxlLFxyXG4gICAgdGhlbWVOYW1lLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICB0aGVtZUNvbnRlbnQsXHJcbiAgICB0aGVtZVZhcmlhYmxlc0NvbnRlbnRcclxuICB9KSk7XHJcbn1cclxuIl19
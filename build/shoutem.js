#!/usr/bin/env node
'use strict';

const semver = require('semver');
const path = require('path');
require('colors');

const getHomeDir = require('./home-dir');
const packageJson = require('../package.json');

const homeDir = getHomeDir();
const nodeVer = process.versions.node;
const cliArgs = process.argv.slice(2);

if (cliArgs[0] === '-v' || cliArgs[0] === '--version') {
  console.log(packageJson.version);
  process.exit(0);
}

if (!path.isAbsolute(homeDir)) {
  console.log(`ERROR: path ${homeDir} is not an absolute path.`.red);
  console.log('Please set your SHOUTEM_CLI_HOME environmental variable to an absolute path'.red);
  process.exit(1);
}

if (semver.lt(nodeVer, '6.0.0')) {
  console.error(`You appear to be using Node v${nodeVer}, however, Node 6 or later is required`);
  process.exit(1);
}

process.env.SHOUTEM_CLI_DIRNAME = path.basename(__dirname);

if (process.env.SHOUTEM_CLI_DIRNAME === 'src') {
  const babelCachePath = path.join(homeDir, 'cache', 'babel-cache');
  process.env.BABEL_CACHE_PATH = process.env.BABEL_CACHE_PATH || babelCachePath;
  require('babel-register')(packageJson.babel);
}

require('./cli');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zaG91dGVtLmpzIl0sIm5hbWVzIjpbInNlbXZlciIsInJlcXVpcmUiLCJwYXRoIiwiZ2V0SG9tZURpciIsInBhY2thZ2VKc29uIiwiaG9tZURpciIsIm5vZGVWZXIiLCJwcm9jZXNzIiwidmVyc2lvbnMiLCJub2RlIiwiY2xpQXJncyIsImFyZ3YiLCJzbGljZSIsImNvbnNvbGUiLCJsb2ciLCJ2ZXJzaW9uIiwiZXhpdCIsImlzQWJzb2x1dGUiLCJyZWQiLCJsdCIsImVycm9yIiwiZW52IiwiU0hPVVRFTV9DTElfRElSTkFNRSIsImJhc2VuYW1lIiwiX19kaXJuYW1lIiwiYmFiZWxDYWNoZVBhdGgiLCJqb2luIiwiQkFCRUxfQ0FDSEVfUEFUSCIsImJhYmVsIl0sIm1hcHBpbmdzIjoiOztBQUNBLE1BQU1BLFNBQVNDLFFBQVEsUUFBUixDQUFmO0FBQ0EsTUFBTUMsT0FBT0QsUUFBUSxNQUFSLENBQWI7QUFDQUEsUUFBUSxRQUFSOztBQUVBLE1BQU1FLGFBQWFGLFFBQVEsWUFBUixDQUFuQjtBQUNBLE1BQU1HLGNBQWNILFFBQVEsaUJBQVIsQ0FBcEI7O0FBRUEsTUFBTUksVUFBVUYsWUFBaEI7QUFDQSxNQUFNRyxVQUFVQyxRQUFRQyxRQUFSLENBQWlCQyxJQUFqQztBQUNBLE1BQU1DLFVBQVVILFFBQVFJLElBQVIsQ0FBYUMsS0FBYixDQUFtQixDQUFuQixDQUFoQjs7QUFFQSxJQUFJRixRQUFRLENBQVIsTUFBZSxJQUFmLElBQXVCQSxRQUFRLENBQVIsTUFBZSxXQUExQyxFQUF1RDtBQUNyREcsVUFBUUMsR0FBUixDQUFZVixZQUFZVyxPQUF4QjtBQUNBUixVQUFRUyxJQUFSLENBQWEsQ0FBYjtBQUNEOztBQUVELElBQUksQ0FBQ2QsS0FBS2UsVUFBTCxDQUFnQlosT0FBaEIsQ0FBTCxFQUErQjtBQUM3QlEsVUFBUUMsR0FBUixDQUFhLGVBQWNULE9BQVEsMkJBQXZCLENBQWtEYSxHQUE5RDtBQUNBTCxVQUFRQyxHQUFSLENBQVksOEVBQThFSSxHQUExRjtBQUNBWCxVQUFRUyxJQUFSLENBQWEsQ0FBYjtBQUNEOztBQUVELElBQUloQixPQUFPbUIsRUFBUCxDQUFVYixPQUFWLEVBQW1CLE9BQW5CLENBQUosRUFBaUM7QUFDL0JPLFVBQVFPLEtBQVIsQ0FBZSxnQ0FBK0JkLE9BQVEsd0NBQXREO0FBQ0FDLFVBQVFTLElBQVIsQ0FBYSxDQUFiO0FBQ0Q7O0FBRURULFFBQVFjLEdBQVIsQ0FBWUMsbUJBQVosR0FBa0NwQixLQUFLcUIsUUFBTCxDQUFjQyxTQUFkLENBQWxDOztBQUVBLElBQUlqQixRQUFRYyxHQUFSLENBQVlDLG1CQUFaLEtBQW9DLEtBQXhDLEVBQStDO0FBQzdDLFFBQU1HLGlCQUFpQnZCLEtBQUt3QixJQUFMLENBQVVyQixPQUFWLEVBQW1CLE9BQW5CLEVBQTRCLGFBQTVCLENBQXZCO0FBQ0FFLFVBQVFjLEdBQVIsQ0FBWU0sZ0JBQVosR0FBK0JwQixRQUFRYyxHQUFSLENBQVlNLGdCQUFaLElBQWdDRixjQUEvRDtBQUNBeEIsVUFBUSxnQkFBUixFQUEwQkcsWUFBWXdCLEtBQXRDO0FBQ0Q7O0FBRUQzQixRQUFRLE9BQVIiLCJmaWxlIjoic2hvdXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCBzZW12ZXIgPSByZXF1aXJlKCdzZW12ZXInKTtcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxucmVxdWlyZSgnY29sb3JzJyk7XHJcblxyXG5jb25zdCBnZXRIb21lRGlyID0gcmVxdWlyZSgnLi9ob21lLWRpcicpO1xyXG5jb25zdCBwYWNrYWdlSnNvbiA9IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpO1xyXG5cclxuY29uc3QgaG9tZURpciA9IGdldEhvbWVEaXIoKTtcclxuY29uc3Qgbm9kZVZlciA9IHByb2Nlc3MudmVyc2lvbnMubm9kZTtcclxuY29uc3QgY2xpQXJncyA9IHByb2Nlc3MuYXJndi5zbGljZSgyKTtcclxuXHJcbmlmIChjbGlBcmdzWzBdID09PSAnLXYnIHx8IGNsaUFyZ3NbMF0gPT09ICctLXZlcnNpb24nKSB7XHJcbiAgY29uc29sZS5sb2cocGFja2FnZUpzb24udmVyc2lvbik7XHJcbiAgcHJvY2Vzcy5leGl0KDApO1xyXG59XHJcblxyXG5pZiAoIXBhdGguaXNBYnNvbHV0ZShob21lRGlyKSkge1xyXG4gIGNvbnNvbGUubG9nKGBFUlJPUjogcGF0aCAke2hvbWVEaXJ9IGlzIG5vdCBhbiBhYnNvbHV0ZSBwYXRoLmAucmVkKTtcclxuICBjb25zb2xlLmxvZygnUGxlYXNlIHNldCB5b3VyIFNIT1VURU1fQ0xJX0hPTUUgZW52aXJvbm1lbnRhbCB2YXJpYWJsZSB0byBhbiBhYnNvbHV0ZSBwYXRoJy5yZWQpO1xyXG4gIHByb2Nlc3MuZXhpdCgxKTtcclxufVxyXG5cclxuaWYgKHNlbXZlci5sdChub2RlVmVyLCAnNi4wLjAnKSkge1xyXG4gIGNvbnNvbGUuZXJyb3IoYFlvdSBhcHBlYXIgdG8gYmUgdXNpbmcgTm9kZSB2JHtub2RlVmVyfSwgaG93ZXZlciwgTm9kZSA2IG9yIGxhdGVyIGlzIHJlcXVpcmVkYCk7XHJcbiAgcHJvY2Vzcy5leGl0KDEpO1xyXG59XHJcblxyXG5wcm9jZXNzLmVudi5TSE9VVEVNX0NMSV9ESVJOQU1FID0gcGF0aC5iYXNlbmFtZShfX2Rpcm5hbWUpO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52LlNIT1VURU1fQ0xJX0RJUk5BTUUgPT09ICdzcmMnKSB7XHJcbiAgY29uc3QgYmFiZWxDYWNoZVBhdGggPSBwYXRoLmpvaW4oaG9tZURpciwgJ2NhY2hlJywgJ2JhYmVsLWNhY2hlJyk7XHJcbiAgcHJvY2Vzcy5lbnYuQkFCRUxfQ0FDSEVfUEFUSCA9IHByb2Nlc3MuZW52LkJBQkVMX0NBQ0hFX1BBVEggfHwgYmFiZWxDYWNoZVBhdGg7XHJcbiAgcmVxdWlyZSgnYmFiZWwtcmVnaXN0ZXInKShwYWNrYWdlSnNvbi5iYWJlbCk7XHJcbn1cclxuXHJcbnJlcXVpcmUoJy4vY2xpJyk7XHJcbiJdfQ==
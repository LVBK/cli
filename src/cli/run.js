import forkTerminal from '@shoutem/fork-terminal';
import path from 'path';

export const description = 'Runs and previews your local code with Shoutem preview app.';
export const command = 'run';
export const builder = yargs => {
  return yargs
    .options({
      local: {
        alias: 'l',
        description: 'Doesn\'t use tunneling for Shoutem app, connects directly to packager. Note: ' +
          'this computer and the mobile device must be connected to the same network and port 8081 must be opened.',
        type: 'boolean'
      },
      small: {
        alias: 's',
        description: 'Displays smaller ASCII QR code which could be unreadable in some fonts.',
        type: 'boolean'
      }
    })
    .usage(`shoutem ${command} [options]\n\n${description}`);
};
export async function handler(args) {
  const nodeArgs = [
    path.join(__dirname, '..', 'scripts', 'shoutem-run.js'),
    '--local', !!args.local,
    '--small', !!args.small
  ];

  forkTerminal('node', nodeArgs, { cwd: process.cwd() })
}

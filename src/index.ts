import * as yargs from 'yargs';
import { run } from './server';

yargs
	.command('* [env] [port]', 'start the server', (yargs) => {
		yargs
			.positional('env', {
				describe: 'env to use',
				default: 'default'
			})
			.positional('port', {
				describe: 'port to bind on',
				default: 5000
			})
	}, argv => {
		run(argv.env, argv.port);
	})
	.help()
	.argv

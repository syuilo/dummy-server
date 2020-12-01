import * as fs from 'fs';
import * as Koa from 'koa';
import * as logger from 'koa-logger';

export function run(env, port) {
	console.info(`launching server...`)

	const assetsPath = `${__dirname}/../config/${env}`;

	const app = new Koa();
	app.use(logger());

	app.use(async ctx => {
		const headerDef = fs.readFileSync(`${assetsPath}/headers.txt`, {
			encoding: 'utf-8'
		});

		const headers = headerDef
			.split('\n')
			.filter(line => line.trim() !== '')
			.map(line => line.split(':'));

		for (const header of headers) {
			ctx.set(header[0].trim(), header[1].trim());
		}

		ctx.body = fs.readFileSync(`${assetsPath}/index.html`, {
			encoding: 'utf-8'
		});
	});

	app.listen(port);

	console.info(`start server on localhost:${port}`);
}

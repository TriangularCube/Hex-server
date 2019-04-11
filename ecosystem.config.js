module.exports = {
	apps : [{
		name: 'hex',
		script: './src/hex.js',

		// Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
		exec_mode: 'fork',
		autorestart: true,
		watch: false,
		max_memory_restart: '1G',
		instance_var: 'INSTANCE_ID',
		env: {
			NODE_ENV: 'development',
			DEBUG: 'hex:*'
		},
		env_production: {
			NODE_ENV: 'production'
		}
	}],

	deploy : {
		development: {
			key : 'd:/etc/.ssh/Github/id_ecdsa',
			user : 'triangularcube',
			host : 'www.triangularcube.com',
			
			repo : 'git@github.com:TriangularCube/Hex-server.git',
			ref : 'origin/master',
			path : '/home/web/node/hex',
			
			'post-deploy' : 'npm install & pm2 restart hex --update-env'
		},
		staging: {},
		production : {
			key : 'd:/etc/.ssh/Github/id_ecdsa',
			user : 'triangularcube',
			host : 'www.triangularcube.com',
			
			repo : 'git@github.com:TriangularCube/Hex-server.git',
			ref  : 'origin/master',
			path : '/home/web/node/hex/production',
			'post-deploy' : 'npm install & pm2 restart hex --env production --update-env'
		}
	}
};

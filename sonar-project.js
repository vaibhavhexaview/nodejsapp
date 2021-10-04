const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
	serverUrl: 'http://15.206.72.140:9000/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectKey': 'nodejs',
	    'sonar.login': '4ac9e2f36aa6cd2225cb535a7f79b04107bfba22',
       },
}, () => {});

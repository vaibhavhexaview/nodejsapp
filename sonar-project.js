const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
	serverUrl: 'http://13.235.241.86:9000/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	   // 'sonar.projectName': 'nodejs',
	    'sonar.projectKey': 'nodejs',
	    'sonar.login': '4ac9e2f36aa6cd2225cb535a7f79b04107bfba22'
	   // 'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});

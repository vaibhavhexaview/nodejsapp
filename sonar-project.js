const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
	serverUrl: 'http://13.235.241.86:9000/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	   // 'sonar.projectName': 'nodejs',
	    'sonar.projectKey': 'nodejs'
	    'sonar.login': '88d1b8a95229d82cb48ea58dd47748a3a2b882f6',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});

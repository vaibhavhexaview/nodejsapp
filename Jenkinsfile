node
{
 
  stage("CheckOutCodeGit")
  {
   git branch: 'master', url: 'https://github.com/vaibhavhexaview/nodejsapp.git'
  }

 
 stage("Build")
  {
     nodejs(nodeJSInstallationName: 'nodejs') {
        sh 'npm install'
       }
  }  

 
 stage('ExecuteSonarQubeReport') 
  {
     nodejs(nodeJSInstallationName: 'nodejs') {
        sh 'npm run sonar'
       }
  }
 
 stage("Docker Build")
  {
                sh '''
                docker build -t nodejsapp:v2.0 .
                docker images
                '''
	}

/*

 stage("Docker Push"){

        sh '''
	docker tag nodejsapp vaibhavhexaview/nodejs-app'
	docker push vaibhavhexaview/nodejs-app:v2.0
	''' 
 }


*/

  stage("Create Deployment")
   {

        sh '''
	 kubectl create -f nodejsdeploy.yaml' 
	 kubectl expose deployment.apps/nodejsapp-deployment --port=6000 --type=LoadBalancer
         sleep 20
	 kubectl get svc
	'''
   }

   
}


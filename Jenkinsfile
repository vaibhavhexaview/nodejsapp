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
	steps {
                sh '''
                docker build -t nodejsapp:v2.0 .
                docker images
                '''
            }
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

        sh 'kubectl create -f nodejsdeploy.yaml' 
   }


  stage("Expose NodeJs to Internet")
   {

	sh 'kubectl expose deployment nodejsdeploy --type="LoadBalancer"'
	sh 'kubectl get svc'

   }

   
}


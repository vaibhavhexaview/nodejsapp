node
{
 
  stage("CheckOutCodeGit")
  {
   git branch: 'main', url: 'https://github.com/vaibhavhexaview/nodeproj.git'
 }
 
 stage("Build")
 {
 nodejs(nodeJSInstallationName: 'nodejs') {
        sh 'npm install'
    }
 }  
 
/*
 
 stage('ExecuteSonarQubeReport') {
     nodejs(nodeJSInstallationName: 'nodejs15.2.1') {
        sh 'npm run sonar'
    }
      
        } 
		
    stage('UploadintoNexus') {
       nodejs(nodeJSInstallationName: 'nodejs15.2.1') {
          sh 'npm publish'
      }
      
          }	

*/
 
 stage('RunNodeJsApp')
 {
 //sh "./scripts/run.sh"

 nodejs(nodeJSInstallationName: 'nodejs') {
        sh 'npm start &'
    }

}    
    
}

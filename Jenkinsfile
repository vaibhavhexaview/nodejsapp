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
 
/*
 
 stage('ExecuteSonarQubeReport') {
     nodejs(nodeJSInstallationName: 'nodejs') {
        sh 'npm run sonar'
    }
      
        } 
		
    stage('UploadintoNexus') {
       nodejs(nodeJSInstallationName: 'nodejs') {
          sh 'npm publish'
      }
      
          }	

*/
 
 stage('RunNodeJsApp')
 {
    sh "chmod u+x ./scripts/runApp.sh"
    sh "./scripts/runApp.sh"

/*

 nodejs(nodeJSInstallationName: 'nodejs') {
        sh 'npm start &'
    }
*/


}    
    
}

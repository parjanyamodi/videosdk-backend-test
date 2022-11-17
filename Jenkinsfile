pipeline{
  agent any
  tools {nodejs "node"}
  
  stages {
    stage ('Git') {
      steps {
        git 'https://github.com/parjanyamodi/videosdk-backend-test.git'
      }
    }
    stage ('Build') {
      steps {
        sh 'npm i'
      }
    }
    stage ('Test') {
      steps {
        echo 'Testing ....'
      }
    }
    stage ('Deploy') {
      steps {
        sh 'pm2 restart videosdk-backend'
      }
    }
  }
}

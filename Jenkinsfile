pipeline{
  agent any
  
  stages {
    stage ('Git') {
      steps {
        sh 'git pull https://github.com/parjanyamodi/videosdk-backend-test.git'
      }
    }
    stage ('Build') {
      steps {
        sh 'npm i'
      }
    }
    stage ('Test') {
      steps {
        sh 'sh setup.sh'
      }
    }
    stage ('Deploy') {
      steps {
        sh 'sh update.sh'
      }
    }
  }
}

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
        echo 'Testing ...'
      }
    }
    stage ('Deploy') {
      steps {
        sh 'ssh -i "/var/www/2022ankercloudkey.pem" ubuntu@13.127.170.126 "sh videosdk.sh"'
      }
    }
  }
}

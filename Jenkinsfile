pipeline {
    agent any

    tools {
        nodejs 'nodejs-16'  // Nome da instalação do NodeJS no Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run'
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}

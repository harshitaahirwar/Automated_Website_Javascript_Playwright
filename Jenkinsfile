pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {

        // stage('Checkout Code') {
        //     steps {
        //         git 'https://github.com/harshitaahirwar/Automated_Website_Javascript_Playwright.git'
        //     }
        // }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
                bat 'npx playwright install --with-deps'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm run test:ci'
            }
        }

        stage('Publish Report Files') {
            steps {
                archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
            }
        }

        stage('Publish HTML Report') {
            steps {
                publishHTML([
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright Report',
                    keepAll: true,
                    alwaysLinkToLastBuild: true,
                    allowMissing: true
                ])
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished'
        }
        success {
            echo 'Tests Passed ✅'
        }
        failure {
            echo 'Tests Failed ❌'
        }
    }
}
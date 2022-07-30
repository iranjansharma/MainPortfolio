pipeline {
    agent any 
    stages {
        stage('Build') { 
            steps {
                echo "node --version" 
                nodejs("Node"){
                    sh "node --version"
                    echo "Checking Node Version"
                }
            }
        }
        stage('Test') { 
            steps {
                echo "Test Node"
                nodejs("Node"){
                    sh "npm --version"
                    echo "Checking NPM Version"
                }  
            }
        }
        // stage('Deploy') { 
        //     steps {
        //         // 
        //     }
        // }
    }
    }
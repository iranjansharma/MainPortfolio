pipeline {
    agent any 
    stages {
        stage('Dependencies Install') { 
            steps {
                echo "node --version" 
                nodejs("Node"){
                    sh "npm install"
                }
            }
        }
        stage('Application Build ') { 
            steps {
                echo "Test Node"
                nodejs("Node"){
                    sh "npm run build"
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
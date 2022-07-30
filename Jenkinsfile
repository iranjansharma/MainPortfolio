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
        stage('Deploy Stage') { 
            steps {
                echo "Deploy Stage"
                sh"pwd"
                sh "cp -r /var/jenkins_home/workspace/Portfolio/build /home/ranjan/ranjansharma.tech"
            }
        }
    }
    }
[![Build Status](https://travis-ci.org/mrin9/Angular2_SpringBoot.svg?branch=master)](https://travis-ci.org/mrin9/Angular2_SpringBoot)

## Angular 2 Frontent with SpringBoot (Java) Backend
Application to demonstrate various parts of a service oriented RESTfull application. 

### Technology Stack
Component         | Technology
---               | ---
Frontend          | [Angular 2](https://github.com/angular/angular)
Backend (REST)    | [SpringBoot](https://projects.spring.io/spring-boot) (Java)
Security          | Token Based (Spring Security and [JWT](https://github.com/auth0/java-jwt) )
REST Documentation| [Swagger UI / Springfox](https://github.com/springfox/springfox) and [ReDoc](https://github.com/Rebilly/ReDoc)
REST Spec         | [Open API Standard](https://www.openapis.org/) 
In Memory DB      | H2 
Persistence       | JPA (Using Spring Data)
Client Build Tools| [angular-cli](https://github.com/angular/angular-cli), Webpack, npm
Server Build Tools| Maven(Java) or Gradle

## Folder Structure
```bash
PROJECT_FOLDER
│  README.md
│  pom.xml           
│
└──[src]      
│  └──[main]      
│     └──[java]      
│     └──[resources]
│        │  application.properties #contains springboot cofigurations
│        │  schema.sql  # Contains DB Script to create tables that executes during the App Startup          
│        │  data.sql    # Contains DB Script to Insert data that executes during the App Startup (after schema.sql)
│        └──[public]    # keep all html,css etc, resources that needs to be exposed to user without security
│
└──[target]              #Java build files, auto-created after running java build: mvn install
│  └──[classes]
│     └──[public]
│     └──[webui]         #webui folder is created by (maven/gradle) which copies webui/dist folder 
│                        #the application.properties file list webui as a resource folder that means files can be accesses http://localhost/<files_inside_webui> 
│
└──[webui]
   │  package.json     
   │  angular-cli.json   #ng build configurations)
   └──[node_modules]
   └──[src]              #frontend source files
   └──[dist]             #frontend build files, auto-created after running angular build: ng -build
```

## Install Instruction

### Prerequisites
Ensure you have this installed before proceeding further
- Java 8       
- Maven 3.3.9 or Gradle 3.3
- Node 7.2.1,  
- npm 3.9.5,   
- Angular-cli 


## App Installation
- Clone the repo in a folder
- You must follow the installation sequence 
    1. First Install Frontend 
    2. Then Install Backend  

#### To Install Frontend
```bash
# Navigate to PROJECT_FOLDER/webui (should cntain package.json )
npm install
# build the project (this will put the files under dist folder)
ng build -prod --aot=false
```

### Install Backend (SpringBoot Java)

#### Enabeling/Disabling spring security ####
to enable Spring Token security the setting 

#### Install ####
```bash
# Maven Build : Navigate to the root folder where pom.xml is present 
mvn clean install

#OR

# Gradle Build : Navigate to the root folder where build.gradle is present 
gradle build

```

### Start the API and WebUI server ###
```bash
# Start the server (9119)
# port and other configurations for API servere is in [./src/main/resources/application.properties](/src/main/resources/application.properties) file

# If you build with maven jar location will be 
java -jar ./target/app-1.0.0.jar

# If you build with gradle jar location will be 
java -jar ./build/libs/app-1.0.0.jar
```

### Accessing Application
Cpmponent         | URL                                      | Credentials
---               | ---                                      | ---
Frontend          |  http://localhost:9119                   | `demo/demo`
H2 Database       |  http://localhost:9119/h2-console        |  Driver:`org.h2.Driver` <br/> JDBC URL:`jdbc:h2:mem:demo` <br/> User Name:`sa`
Swagger (API Ref) |  http://localhost:9119/swagger-ui.html   |
Redoc (API Ref)   |  http://localhost:9119/redoc/index.html  |


**To get an authentication token** 
```bash
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"username": "demo", "password": "demo" }' 'http://localhost:9119/session'
```
or POST the username and password to http://localhost:9119/session


after you get the authentication token you must provide this in the header for all the protected urls 

```bash
curl -X GET --header 'Accept: application/json' --header 'Authorization: [replace this with token ]' 'http://localhost:9119/version'
```

###Screenshots
####Dashboard
![Dashboard](/screenshots/Dashboard.png?raw=true)
---
####Incident Data Table (Large table with Virtual scrolling )
![Incident Data Table](/screenshots/Incident.png?raw=true)
---
####Policy Data Table
![Policy Data Table](/screenshots/Policy.png?raw=true)
---
####Policy Details
![Policy Details](/screenshots/PolicyRules.png?raw=true)
---
####Swagger API Reference
![Swagger API Reference](/screenshots/API_List.png?raw=true)
---
####Database ER Diagram
![ER DIagram](/screenshots/ER_Model.png?raw=true)

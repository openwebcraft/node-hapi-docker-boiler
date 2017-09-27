# node-hapi-docker-boiler

| Warning |
| --- |
|This repository is still work in progress.|


This is a boilerplate for developing a small hapi server (or microservice) inspired by [openwebcraft/node-js-starter](https://github.com/openwebcraft/nodejs-docker-starter)


## Setup

### Prerequisites

* Docker installed
* docker-compose installed

### Run locally

To run locally simply use 
>`docker-compose up --build`

Server will be build, MongoDB Image will be downlaoded and both will start.
The Server will be restarted as soon as you change something in the project.

### Testing

To start the tests simply use
>`docker-compose -f docker-compose-test.yml up --build`

Server will be build, MongoDB Image will be downlaoded. MongoDB and tests will be started. Tests will restart with each change in teh repo by nodemon.

## How to use
You should use this boilerplate as a starting point or inspiration for your servers / microservices.

The boilerplate is build in a way, that you can run and test your server locally in an easy way with docker.

`docker-compose.yml` is used to run the project. `docker-compose-test.yml` is used to test it. Both integrate nodemon to automatically reload as soon as you change something.

## Deeper look inside

### dependencies

* Hapi
* mongoose
* bluebird
* boom
* hapi-auth-jwt2
* joi
* jsonwebtoken
* require-all

### devDependencies

* code
* lab
* nock
* pow-mongodb-fixtures



### Project Structure

```
.
+-- _config
|   +-- config.js       
+-- _src
|   +-- controllers     //For all controllers
|   +-- models          //For all mongoose Models
|   +-- auth.js
|   +-- db.js
|   +-- index.js
|   +-- server.js
+-- _test
|   +-- controllers
|   +-- models
|   +-- helper          //For test helper scripts like JWT-generation
+-- .dockerignore
+-- docker-compose.yml
+-- Dockerfile
+-- LICENSE
+-- package.json
+-- README.md

```

## License 

>MIT License
>Copyright (c) 2017 Karl-Heinz Oberkoxholt
>
>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
>
>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
>
>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## TODO:
* Service to service communication example and testing example
* List of changes to create a new MS
* lint?
* docker compose inheritance with "extends" (not supported in compose v3)







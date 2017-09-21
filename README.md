# node-hapi-docker-boiler

| Warning |
| --- |
|This repository is still work in progress.

This is a boilerplate for developing a small hapi server (or microservice) inspired by [openwebcraft/node-js-starter](https://github.com/openwebcraft/nodejs-docker-starter)

## Purpose of this Boilerplate

## How to use

### Setup

## Deeper look inside

### dependencies

* Hapi
* mongoose
* bluebird
* boom
* hapi-auth-jwt2
* joi
* jsonwebtoken
* moment
* require-all

### devDependencies

* code
* lab
* nock
* pow-mongodb-fixtures



### Project Structure

```
.
+-- _src
|   +-- controller  //For all controllers
|   +-- models      //For all mongoose Models
|   +-- auth.js
|   +-- db.js
|   +-- index.js
|   +-- server.js
+-- _test
|   +-- controller
|   +-- models
|   +-- helper
+-- .dockerignore
+-- config.js
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
* Explain installation and execution
* List of changes to create a new MS
* lint?
* compose to run locally
* compose to test locally with nodemon
* implement example endpoint
* example tests
* example fixtures
* jwt helper for testing







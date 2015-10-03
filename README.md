# Wordpi
Simple word guessing game created using Node.js

### Badges! Wow!
[![Code Climate](https://codeclimate.com/github/fcscripters/Wordpi/badges/gpa.svg)](https://codeclimate.com/github/fcscripters/Wordpi)
[![Test Coverage](https://codeclimate.com/github/fcscripters/Wordpi/badges/coverage.svg)](https://codeclimate.com/github/fcscripters/Wordpi/coverage)
[![Build Status](https://travis-ci.org/fcscripters/Wordpi.svg?branch=master)](https://travis-ci.org/fcscripters/Wordpi)
[![codecov.io](http://codecov.io/github/fcscripters/Wordpi/coverage.svg?branch=master)](http://codecov.io/github/fcscripters/Wordpi?branch=master)
[![Dependency Status](https://david-dm.org/fcscripters/Wordpi.svg)](https://david-dm.org/fcscripters/Wordpi)
[![devDependency Status](https://david-dm.org/fcscripters/Wordpi/dev-status.svg)](https://david-dm.org/fcscripters/Wordpi#info=devDependencies)
[![HitCount](https://hitt.herokuapp.com/fcscripters/Wordpi.svg)](https://github.com/fcscripters/Wordpi)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)



WordPi is an interactive Word Definition game, in which a user will have to match a definition to a specific word.

#### Heroku Access
**To run the app on the web, please go [here](https://young-springs-4309.herokuapp.com/)**

#### Local Access
For local access, please **star** the repo and then clone it from [here](https://github.com/fcscripters/Wordpi), make sure you run `npm install` to install all the dependencies for this project.
* If you have nodemon installed globally use `npm run nodemon` to run the server locally.
* You could also start server by entering `node server.js`


#### Concept
* Return autocomplete search based on the users input
* Also return a random definition which is linked to one of the autocomplete results which has been returned
* Ask user to select the correct word which is related to the definition

**Wireframe**
![img_1935](https://cloud.githubusercontent.com/assets/2305591/10230405/cd0ea6b4-6874-11e5-8a85-53d25b0591be.JPG)

**Backend**
* First project for FCScripters using Node.
* Dictionary in word.txt file in backend
* No Depencies, only Developer Dependencies mainly used for testing and checking coverage
 * Tape
 * Travis
 * Shot
 * Istanbul + few others

 **Tests**
 * Travis for continuous integration
 * Code Climate for a Coverage and a overall score
 * CodeCov for Coverage

**API**
 * [Wordnik API](http://developer.wordnik.com/docs.html)
 * Querying the API for definitions using a GET requests


**Frontend**
* Mostly loaded dynamically using the user's search input
* Created a userinput.js file which is sendind the user's search input to backend using http request.

**Tests**
* QUNIT for front end testing

**Difficulties/Learning Outcomes**
* We would be here all day if we were to list them all
* HTTP requests in Node turned out to be very important for our project
* linking backend to front-end was also a hard task to solve which we solved, eventually

**Relevant Links**

* Thanks Nelon for his Autocomplete repo to get us started. [link](https://github.com/dwyl/autocomplete)
* Week 3's Learning Objectives [link](https://github.com/FAC6/book/tree/master/patterns/week3)
* Nikki's Learn-node tutorial [link](https://github.com/nikhilaravi/learn-node)

##### FCSCripters
**Conor -
Gethin -
Sohil -
Tormod**

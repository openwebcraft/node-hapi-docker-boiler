const Lab = require('lab');
const lab = exports.lab = Lab.script();
const expect = require('code').expect;


const config = require('../../config');
const fixtures = require('pow-mongodb-fixtures').connect(config.mongo.uri);

const server = require('../../src/server');
const Planet = require('../../src/models/Planet');
const planetsFixture = require('../fixtures/planets');
const jwt = require('../helper/jwt');
const statusCodes = require('../helper/statusCodes');
const helper = require('../helper/general');

//Connct to the db from server side.
require('../../src/db').connect();



/**
 * I usually use one experiment per path and method. If I have to many tests I may split them.
 * But I never use one experiment for more than one Path/Method combination.
 */
lab.experiment('GET /planets/:name', () => {

    lab.before(done => {
        fixtures.clearAndLoad({
            planets: planetsFixture
        }, () => {
            Planet.ensureIndexes() //make sure to ensure the indexes after dropping the collection!
            .then(()=>{
                done();
            }).catch(err => {
                throw err;
            });
        });
    });

    lab.test('with invalid token', done => {
        let token = jwt.generateJWT({ _id: "1234ABCD" }, 60, true);
        server.inject({
            method: 'GET',
            url: '/planets/Alpha'
        }, result => {
            result = JSON.parse(result.payload);
            expect(result).to.equal(helper.fixtureToPlainJSON(planetsFixture.planetToGet));
            done();
        });
    });

    lab.after(done => {
        fixtures.clear(done);
    });

});

lab.experiment('POST /planets', () => {

    lab.before(done => {
        fixtures.clear(() => {
            Planet.ensureIndexes()
                .then(()=>{
                    done();
                }).catch(err => {
                    throw err;
                });
        });
    });


    /**
     * example test false token
     */
    lab.test('with invalid token', done => {
        let token = jwt.generateJWT({ _id: "1234ABCD" }, 60, true);
        server.inject({
            method: 'POST',
            url: '/planets',
            headers: {
                Authorization: "Bearer " + token
            }
        }, result => {
            statusCodes.expectUnauthorized(result);
            done();
        });
    });


    /**
     * example test false token
     */
    lab.test('duplicate key', done => {
        let token = jwt.generateJWT({ _id: "1234ABCD" }, 60);
        let options = {
            method: 'POST',
            url: '/planets',
            headers: {
                Authorization: "Bearer " + token
            },
            payload: {
                name: "Alpha"
            }
        };
        server.inject(options, result => {
            //Do same again to get conflict
            server.inject(options, result => {
                statusCodes.expectConflict(result);
                done();
            })
        });
    });



    lab.after(done => {
        fixtures.clear(done);
    });

});
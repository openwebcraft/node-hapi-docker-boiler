const expect = require('code').expect;
const helper = require('./general');


const expectValidationError = reply => {
    let error = helper.replyToPayload(reply);
    expect(error.statusCode).to.equal(400);
    expect(error.error).to.equal('Bad Request');
    expect(error.validation).exists();
};

const expectNotFound = reply => {
    let error = helper.replyToPayload(reply);
    expect(error.statusCode).to.equal(404);
    expect(error.error).to.equal('Not Found');
};

const expectUnauthorized = reply => {
    let error = helper.replyToPayload(reply);
    expect(error.statusCode).to.equal(401);
    expect(error.error).to.equal('Unauthorized');
};

const expectForbidden = reply => {
    let error = helper.replyToPayload(reply);
    expect(error.statusCode).to.equal(403);
    expect(error.error).to.equal('Forbidden');
};

const expectBadRequest = reply => {
    let error = helper.replyToPayload(reply);
    expect(error.statusCode).to.equal(400);
    expect(error.error).to.equal('Bad Request');
};

const expectConflict = reply => {
    let error = helper.replyToPayload(reply);
    expect(error.statusCode).to.equal(409);
    expect(error.error).to.equal('Conflict');
};

const expectSuccess = reply => {
    expect(reply.statusCode).to.equal(204);
    expect(reply.statusMessage).to.equal('No Content');
};

const expectServiceUnavailable = reply => {
    let error = helper.replyToPayload(reply);
    expect(error.statusCode).to.equal(503);
    expect(error.error).to.equal('Service Unavailable');
};

module.exports = {
    expectForbidden,
    expectNotFound,
    expectUnauthorized,
    expectValidationError,
    expectSuccess,
    expectBadRequest,
    expectConflict,
    expectServiceUnavailable
};

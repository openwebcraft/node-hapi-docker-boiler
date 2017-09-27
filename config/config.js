'use strict';

/**
 * Define your required enfironment variable here.
 * If an env is missing, we will throw an error.
 */
[
    'NODE_ENV',
    'HOST',
    'PORT',
    'ORIGIN',
    'JWTSECRET',
    'MONGODB_URI',
].forEach((name) => {
    if (!process.env[name]) {
        throw new Error(`Environment variable ${name} is missing`)
    }
})


/**
 * This is the JSON which will be exported. Use all required envs here.
 * 
 * You can also extend your config with static values.
 */
const config = {
    env: process.env.NODE_ENV,
    server: {
        host: process.env.HOST,
        port: Number(process.env.PORT),
        origin: process.env.ORIGIN.split(' ')
    },
    auth: {
        jwtSecret: process.env.JWTSECRET
    },
    mongo: {
        uri: process.env.MONGODB_URI,
        options: {}
    },
    foo: {
        bar: "NoEnv"
    }

}

module.exports = config;
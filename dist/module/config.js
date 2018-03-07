import { getGlobal } from './global';

function get(key, def) {
    var config = getGlobal('config');
    return config.hasOwnProperty(key) ? config[key] : def;
}

function set(key, value) {
    var config = getGlobal('config');
    config[key] = value;
    return value;
}

function getOrSet(key, value) {
    var config = getGlobal('config');
    if (config.hasOwnProperty(key)) {
        return config[key];
    } else {
        config[key] = value;
        return value;
    }
}

export var clientConfig = { get: get, set: set, getOrSet: getOrSet };

export var serverConfig = __SERVER_PAYPAL_BRAINTREE_CONFIG__;
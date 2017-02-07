function getConfigOption(name) {
    'use strict';

    if (!name) {
        return undefined;
    }

    return process.env[`npm_package_config_${name}`]
}

export default getConfigOption;
import webpack from 'webpack';
import colors from 'colors';
import config from '../webpack.config.prod';

process.env.NODE_ENV = 'production';

/* eslint-disable no-console */

webpack(config).run((error, stats) => {
    if (error) {
        // Fatal error occurred
        console.log(error.red);
        return 1;
    }

    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(error => console.log(error.red));
    }

    if (jsonStats.hasWarnings) {
        console.log('Webpack generated the following warnings: '.yellow);
        jsonStats.warnings.map(warning => console.log(warning.yellow));
    }

    console.log(`Webpack stats: ${stats}`);

    // if we got this far, the build succeeded.
    console.log('Your app is compiled in production mode in /dist. It\'s ready to roll!'.green);

    return 0;
});
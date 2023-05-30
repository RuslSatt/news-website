import {BuildOptions} from "./types/config";
import {Configuration as ConfigurationDev} from 'webpack-dev-server';

export function buildDevServer(options: BuildOptions): ConfigurationDev {
    return {
        port: options.port,
        open: true
    }
}

import webpack from "webpack";
import path from "path";
import {buildLoaders} from "./buildLoaders";
import {buildResolve} from "./buildResolve";
import {buildPlugins} from "./buildPlugins";
import {BuildOptions} from "./types/config";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {mode, paths} = options;
    return  {
        mode: mode,
        entry: paths.entry,
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolve(),
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(options)
    }
}

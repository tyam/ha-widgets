import babel from 'rollup-plugin-babel';
import scss from 'rollup-plugin-scss';
import copy from 'rollup-plugin-copy';

const configForLib = {
    input: 'src/index.js',
    external: ['hyperapp'],
    output: {
        format: 'umd',
        file: 'dist/haw.js', 
        name: 'haw', 
        globals: {
            hyperapp: "hyperapp"
        }
    }, 
    plugins: [
        babel({ exclude: "node_modules/**" }), 
        scss({ output: "dist/haw.css" }), 
        copy({targets:{'dist':'docs/dist'}})
    ]
}

const configForDocs = {
    input: 'docs/src/index.js', 
    external: ['hyperapp', 'haw'], 
    output: {
        format: 'umd', 
        file: 'docs/dist/index.js', 
        name: 'app', 
        globals: {
            hyperapp: "hyperapp", 
            haw: "haw"
        }
    }, 
    plugins: [
        babel({ exclude: "node_modules/**" })
    ]
}

const config = [configForLib, configForDocs];
export default config;
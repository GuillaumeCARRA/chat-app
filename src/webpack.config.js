// with webpack 5 we have to require dotenv-webpack
// dotenv-webpack wraps dotenv and Webpack.DefinePlugin. 
// As such, it does a text replace in the resulting bundle for any instances of process.env.
// npm install dotenv-webpack

const Dotenv = require('dotenv-webpack');
module.exports = {
    plugins: [
        new Dotenv()
    ]
}

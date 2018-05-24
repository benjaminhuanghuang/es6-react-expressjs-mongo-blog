
## Server side ES6
Install express to create web server and development tools
```
    npm i express helmet compression body-parser cors chalk -S
    npm i nodemon morgan -D
```
- Helmet provides basic security for our HTTP headers
- compression decreases the size of the responses we sende back the client
- cors protects us from shady cross-origin requests
- body-parser converts the incoming requests so that we can work with them in Express

- morgan is a great, basic tool that let’s us monitor HTTP activity in our console
- Chalk allows us to specify the color of the console output

Since we’re using ES6+ syntax with ExpressJS over NodeJS, we need to make sure to transpile it down to ES5.
1. Install Babel Packages
```
    npm i babel-cli babel-preset-env -D
```
2. Create a .babelrc file
```
    { 
        "presets": [ 
            [ "env", 
              { "targets": 
                { "node": "current" } 
              } 
            ] 
        ] 
    }
```
3. Create a script in package.json to start server.
    babel-node was installed with babel-cli, it can run ES6 in Node environment.
```
    "demo": "babel-node index.js"
```
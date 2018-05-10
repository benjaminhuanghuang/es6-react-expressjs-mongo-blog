## Reference 
- Clean Code with React, ExpressJS, and MongoDB — Part 1
https://itnext.io/clean-code-with-react-expressjs-and-mongodb-part-1-aa6b1a4aef82



## Server side ES6
Install express to create web server and development tools
```
    npm i express nodemon -S
```

Since we’re using ES6+ syntax with ExpressJS over NodeJS, we need to make sure to transpile it down to ES5.
1. Install Babel Packages
```
    npm i babel-cli babel-preset-env -D
```
2. Create a .babelrc file
3. Create a script in our package.json.
    babel-node was installed with babel-cli, it can ren ES6 in Node environment.
```
    "demo": "babel-node index.js"
```

## Server Middleware
```
    npm i helmet compression body-parser cors -S
    npm i morgan chalk -D
```
- body-parser converts the incoming requests so that we can work with them in Express
- Helmet provides basic security for our HTTP headers
- compression decreases the size of the responses we sende back the client
- cors protects us from shady cross-origin requests
- morgan is a great, basic tool that let’s us monitor  HTTP activity in our console
- Chalk allows us to specify the color of the console output
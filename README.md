## Reference 
- Clean Code with React, ExpressJS, and MongoDB — Part 1
    - https://itnext.io/clean-code-with-react-expressjs-and-mongodb-part-1-aa6b1a4aef82

- Redux-Style File Structure
    - https://itnext.io/clean-code-with-react-expressjs-and-mongodb-part-2-89d20e684820

## Install server side libraries
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
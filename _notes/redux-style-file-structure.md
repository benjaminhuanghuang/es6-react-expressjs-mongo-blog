## Redux-Style File Structure
With ES6+ syntax, if a directory if referenced (and not a specific file), Node looks for an index.js file in that directory to tell it what to do. 

The goal is to export functions and constants from other files in the **same directory** through the index.js. We can use this feature to gather up all of our functions and constants and export them through the index.js.
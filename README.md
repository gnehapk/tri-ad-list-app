This project shows the top popular products for the company.

## Folder Structure

After extracting, your project should look like this:

```
tri-ad-assn/
  README.md
  node_modules/
  package.json
  public/
    index.html
  src/
    assets - stores images, json
      images
      json
    components -  stores functional(stateless) components
      avatar - avatar component
      product - wrapper for a single product which includes other sub components
      product-details - component for showing the details of a product i.e title, description, avatar, votes
      product-img - component for showing the product image
      votes-container - component for showing total votes for the product
    containers - stores class(statefull) components
      popular-products - main stateful component which list the products and calls other functional components
    context - stores context apis required for the product
    App.js - calls popular-products component
    index.css - add styles common to all views
    index.js - javascript entry point
    color-variables.scss - store colors at a single point, which are used across all views
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

## How to run the app -

### In development mode -

    - Unzip the `neha` folder
    - Go to `tri-ad-assn` folder
    - Run `npm install`
    - Run 'npm start`, which will show the url(generally its `http://localhost:3000/`) in the logs
    - Opem the url in the browser(generally - http://localhost:3000/)
    - Now you can see the application running
    - It will also add the watchers, which will automatically reflect the code changes in the browser

###  In production mode -

    - Unzip the `neha` folder
    - Go to `tri-ad-assn` folder
    - Run `npm install`
    - Run 'npm run build`, it will minify and obfuscate the code for production environment.
    - It will create a `build` folder.
    - If you want to run the app, go to the build folder
    -  You can run any server here - for eg. http-server(you have to install the server, if not already installed - sudo npm install http-server -g, and then run `http-server` command)
    - Type the url exposed by the server in the browser
    - Now you can see the application running

## My approach/Whats done - 
 
   - Created a SPA application using ReactJS library, which looks exactly the same as the design, and it shows the product ordered by votes count in descending.
   - One can increase the votes count of the product by clicking the arrow button, and list is again get sorted.
   - Modularized the views based on their responsibility
   - Divided the stateless and stateful components
   - Build a responsive web application - used flex
   - Used public folder to store the images which are dynmically required so that it can be accessible without using require.context
   - For other images and json files, used assets folder inside src.
   - Written unit tests for one functional component(product-details.js) and class component(popular-products.js) to give you the overall idea of unit testing. Total 11 unit tests have been written which can be seen by running npm run test or npm test.
   
## Technology Stack Used -
  - ReactJS
  - JavaScript - ES6 
  - HTML
  - SCSS
  - Webpack - for module bundling
  - Babel - for converting ES6 code to browser supported code
  - npm - package manager
  - jest - test runner
  - enzymes - test library


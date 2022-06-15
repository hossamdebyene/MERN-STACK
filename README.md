# Getting Started with Installing React App

After Cloning the repo or downloading the code file (zip).
you go on the directory of `../mern-task`
and command in the cmd with the following npm install or yarn add
and also you go another directory `./server`
and command in the cmd with the same command npm install or yarn add

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
after writing this script you run up the frontend (`./mern-task`)

### `npm run server`

in the (`./server`) directory run the following script to fire up the backend server to start getting and posting data on the database

### `npm test`

Launches the test runner in the interactive watch mode.\
which there is some written tests with the testing-library functions and components

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
This in case your application is finished and to be optimized for better performance deployed from server or from linux server

### `npm run wdio`

also written in the `./mern-task` directory
This an automated testing scenario that shows how the user used the application from adding the cusstomer to phone verification and for deleting and editing the customer from the Home page
it will fails if the server or web application wasn't running

### App Discription

This is a mern-stack web application used for adding and editing customers with phone number verification micro service with giving the operator name and country name and country code
as a frontend react library (javascript) used to deploy the frontend with using the react-bootstrap library for the ui.
as the backend it is used node (javascript) generally and having the express web framework (specifically) with the built-in function to have the connection between the database and the frontend
the mongoose library used to handle the mongodb operations between backend and the database.

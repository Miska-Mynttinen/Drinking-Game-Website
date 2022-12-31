# Drinking-Game-Website: https://drinkinggame.fly.dev/
Question based drinking game website

Deployed with fly.io

### Built with MondoDB(Atlas), Express, React, Node.

Mostly Frontend code with React. A simple backend using Node, Express and MondoDB.

### Frontend npm packages
 - axios (allow in render async requests, create HTTP requests that are present externally)
 - react-router-dom (for routing on the game pages)
 - express-async-errors (for handling async errors in services)
 - json-server --save-dev (testing with mock json-data)
 - eslint --save-dev (for code styling correctly)

### Backend npm packages
 - express (manage server and routing)
 - express-async-errors (error handling with async functions)
 - nodemon --save-dev (restart node application when changes happen to make development easier)
 - cors (frontend domain request to backend)
 - mongoose (connecting backend to MondoDB)
 - dotenv (MongoDB password, url and PORT)
 - eslint --save-dev (code styling)

#### Credits
 - Backround: [Mohammad Abdul Mohaiman](https://codepen.io/mohaiman/pen/MQqMyo) February 25, 2018
 - [Emoji component](https://blog.logrocket.com/adding-emojis-react-app/)


### How to run locally
#### First set up .env in backend folder.
MONGODB_URI=         database connection url
TEST_MONGODB_URI=    Needed only for testing
SECRET=

Run ```npm install``` on frontend and backend folders to install dependencies.
Run ```npm start``` in the backend folder to start the application on localhost:3003.
const http = require("http");
const app = require("./app");
const {mongoConnect}= require('./services/mongo');
const {loadPlanetsData}=require('./models/planets.model');
const {loadLauchData}= require('./models/launches.model');

const PORT = process.env.PORT || 8000;

// we use the express module like a middleware in app.js
const server = http.createServer(app);

async function startServer() {
  await mongoConnect();
  await loadPlanetsData();
  await loadLauchData();
  server.listen(PORT, () => {
    console.log(`Listening on ${PORT}....`);
  });
}

startServer();

//express setup
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const User = require("./models/user.model");
const Events = require("./models/events.model");

var globalCoordsHandler = {};
//socket io server
const server = require("http").createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });

app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    parameterLimit: 100000000,
    extended: true,
  })
);

// CORS setup
app.use(
  cors({
    origin: "*",
  })
);
//connect to mongodb
require("./db");
app.get("/", (req, res) => {
  res.send("Server is alive and awesome");
});

app.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (!user) {
      res.send({ status: 400, message: "User not found" });
    } else {
      if (user.password === req.body.password) {
        res.send({ status: 200, message: "User Logged in successfully" });
      } else {
        res.send({ status: 400, message: "Incorrect Password" });
      }
    }
  } catch (err) {
    console.log(err);
    res.send({ status: 500, message: err });
  }
});
app.post("/register", async (req, res) => {
  try {
    var existingUser = await User.findOne({ email: req.body.email });
    console.log(existingUser, req.body);
    if (existingUser) {
      res.send({ status: 300, message: "User already exists" });
    } else {
      var newUser = {
        password: req.body.password,
        email: req.body.email,
      };
      var createdUser = await User.create(newUser);
      res.send({ status: 200, message: createdUser });
    }
  } catch (err) {
    console.log(err);
    res.send({ status: 500, message: err });
  }
});
io.on("connection", (socket) => {
  console.log("New user connected", socket.id);
  //enter new connection event to db

  //if any event is recieved from client
  socket.on("event", async (data) => {
    var event = JSON.parse(data);
    //put to db
    await Events.create({
      email: event.user,
      event: JSON.stringify(event.event),
    });
  });
  socket.on("sendcoords", (data) => {
    var user = JSON.parse(data);
    globalCoordsHandler[user.user.toString()] = user.coords;
    console.log(globalCoordsHandler);
    socket.emit("checkcoords", globalCoordsHandler);
  });
  socket.emit("checkcoords", globalCoordsHandler);
  //if any client disconnects
  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
    //put to db
  });
});

server.listen(8080, () => console.log("Server is running on port 8080"));

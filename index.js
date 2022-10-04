//express setup
const express = require("express");
const app = express();
//socket io server
const server = require("http").createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });

//connect to mongodb

//ejs setup
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

io.on("connection", (socket) => {
  console.log("New user connected", socket.id);
  //enter new connection event to db

  //if any event is recieved from client
  socket.on("event", (data) => {
    console.log(data);
    //put to db
  });

  //if any client disconnects
  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
    //put to db
  });
});

server.listen(3001, () => console.log("Server is running on port 3001"));

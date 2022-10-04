const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

io.on("connection", (socket) => {
  console.log("New user connected", socket.id);
});

server.listen(3001, () => console.log("Server is running on port 3001"));

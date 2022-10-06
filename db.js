const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/videosdk-test";
mongoose.connect(uri).then(() => {
  console.log("DataBase connection successful");
});

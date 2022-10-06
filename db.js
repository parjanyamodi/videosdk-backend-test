const mongoose = require("mongoose");

const uri = "mongodb://0.0.0.0:27017/videosdk-test";
mongoose.connect(uri).then(() => {
  console.log("DataBase connection successful");
});

const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/videosdk-test";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DataBase connection successful");
  });

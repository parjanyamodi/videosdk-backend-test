const mongoose = require("mongoose");

const uri =
  "mongodb+srv://admin:toor2022@127.0.0.1:27017/videosdk-test?retryWrites=true&w=majority";
mongoose.connect(uri).then(() => {
  console.log("DataBase connection successful");
});

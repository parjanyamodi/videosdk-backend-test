const mongoose = require("mongoose");

const uri =
  "mongodb+srv://nodejsdbaccess:CkT4M0TfhH16l0fC@cluster0.ym6gtcv.mongodb.net/videosdk-test?retryWrites=true&w=majority";
mongoose.connect(uri).then(() => {
  console.log("DataBase connection successful");
});

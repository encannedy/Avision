  
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://<WorkoutTracker>:<Password1>@ds261460.mlab.com:61460/heroku_hxwg5vc4", { useNewUrlParser: true});


app.listen(PORT, () => {
  console.log("Server listening at localhost:" + PORT);
});
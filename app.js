const express = require("express");
// const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./config/db");
const { PORT } = require("./config/variabelEnv");
const product = require("./routes/product");
const picture = require("./routes/picture");
const mongodbbank = require("./routes/codeomongodbbank");
const mongodb = require("./routes/codeomongodb");
const mongodbcms = require("./routes/codeomongodbcms");
const mongodbledger = require("./routes/codeomongodbledger");



const Port = PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.send("hello");
});
app.use("/product", product);
app.use("/pict", picture);
app.use("/mongodbbank", mongodbbank);
app.use("/mongodb", mongodb);
app.use("/mongodbcms", mongodbcms);
app.use("/mongodbledger", mongodbledger);




if (!config) {
  console.log({
    error : error
  });
}else {
  console.log ("success connected to database")
}

app.listen(Port, () => {
  console.log(`Server is running on PORT ${Port}`);
});

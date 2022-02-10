const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');
const app = express();

var PORT = process.env.PORT || 3001;

//Middleware
app.use(express.json());
//urlencoded tells it to process the data as a string or array
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
//use /api to call data back and forth
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port 3001!`);
  });
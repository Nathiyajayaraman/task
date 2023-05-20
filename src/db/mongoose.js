const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/task");

mongoose.connection.once("open", function(){
    console.log("mongodb database connection established sucessfully");
})
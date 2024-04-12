const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://shreyashrahinj:sbr291976@cluster0.xuxjasa.mongodb.net/?retryWrites=true&w=majority"
const connectToMongo = async() => {
     mongoose.set('strictQuery', false);
  
    return mongoose.connect(mongoURI)
      .then(() => {
        console.log('Mongo connected successfully');
      })
      .catch((error) => {
        console.log(error);
        process.exit();
      });
  };
module.exports = connectToMongo;
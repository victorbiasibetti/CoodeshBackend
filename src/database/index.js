const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://coodesh_user:coodesh_user@cluster0-b3rvc.mongodb.net/coodesh_db?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);
mongoose.Promise = global.Promise;

module.exports = mongoose;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var mongodbSchema = new Schema(
  {
    nama_user: { 
        type: String,
        require: true 
         },
    email_user: { 
        type: String,
        require: true 
        },
    id_level: { 
        type: String,
        require: true 
         },
    password_user: { 
         type: String,
         require: true 
         },
    date_user: {
         type: Date,
         default: Date.now
    }
  }
);

const Mongodb = mongoose.model("admin_users", mongodbSchema);
module.exports = Mongodb;
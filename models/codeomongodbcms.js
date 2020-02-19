const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var mongodbcmsSchema = new Schema(
  {
    id_category: { 
        type: String,
        require: true 
         },
    title_cms: { 
        type: String,
        require: true 
        },
    description_cms: { 
        type: String,
        require: true 
         },
    date_updatecms: {
         type: Date,
         default: Date.now
    }
  }
);

const Mongodbcms = mongoose.model("cms_tabels", mongodbcmsSchema);
module.exports = Mongodbcms;
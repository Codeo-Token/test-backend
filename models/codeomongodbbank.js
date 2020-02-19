const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var mongodbbankSchema = new Schema(
  {
    id_user: { 
        type: String,
        require: true 
         },
    nama_bank: { 
        type: String,
        require: true 
        },
    no_rekening: { 
        type: String,
        require: true 
         },
    jumlah_saldo: { 
         type: String,
         require: true 
         },
    date_time: {
         type: Date,
         default: Date.now
    }
  }
);

const Mongodbbank = mongoose.model("bank_tabels", mongodbbankSchema);
module.exports = Mongodbbank;
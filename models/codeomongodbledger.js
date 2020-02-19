const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var mongodbledgerSchema = new Schema(
  {
    id_user: { 
        type: String,
        require: true 
         },
    date_createwallet: {
        type: Date,
        default: Date.now
     },
    wallet_address: { 
        type: String,
        require: true 
         },
    actual_balance: { 
        type: String,
        require: true 
        },
    ETH_actualbalance: { 
        type: String,
        require: true 
        },
    private_key: { 
        type: String,
        require: true 
      }
  }
);

const Mongodbledger = mongoose.model("ledger_tabels", mongodbledgerSchema);
module.exports = Mongodbledger;
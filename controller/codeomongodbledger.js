const Mongodbledger = require("../models/codeomongodbledger");

module.exports = {
  getAll: (req, res) => {
    Mongodbledger.find((error, result) => {
      if (error) {
        res.status(400).send({
          message: `failed to get data`,
          error
        });
      } else {
        res.status(200).send({
          message: `All data get`,
          result
        });
      }
    })
  },

  getOne: (req, res) => {
    Mongodbledger.findOne({ _id: req.params._id }, (error, result) => {
      if (error) {
        res.status(400).send({
          message: `can't find one`,
          error
        });
      } else {
        res.status(200).send({
          message: `we find it`,
          result
        });
      }
    })
  },

  addMongodbledger: async (req, res) => {
    try {
      Mongodbledger.create({
        id_user: req.body.id_user,
        date_createwallet: req.body.date_createwallet,
        wallet_address: req.body.wallet_address,
        actual_balance: req.body.actual_balance,
        ETH_actualbalance: req.body.ETH_actualbalance,
        private_key: req.body.private_key
      });
      res.status(200).send({
        message: "data ledger is created",
        Mongodbledger
      });
    } catch (error) {
      res.status(400).send({
        message: `failed to created`,
        error: error.message
      });
    }
  },

  updateMongodbledger: (req, res) => {
    console.log(req.body);
    Mongodbledger.findOneAndUpdate(
      { _id: req.params._id },
      req.body,
      (error, result) => {
        if (error) {
          res.status(400).send({
            message: `data ledger failed to update`,
            error
          });
        } else {
          res.status(200).send({
            message: `data ledger update`,
            result
          });
        }
      }
    );
  },

  deleteMongodbledger: (req, res) => {
    Mongodbledger.findOneAndDelete({ _id: req.params._id }, (error, result) => {
      if (error) {
        res.status(400).send({
          message: `data ledger failed to delete`,
          error
        });
      } else {
        res.status(200).send({
          message: `data ledger delete`,
          result
        });
      }
    });
  }
};

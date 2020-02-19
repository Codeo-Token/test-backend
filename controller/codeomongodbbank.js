const Mongodbbank = require("../models/codeomongodbbank");

module.exports = {
  getAll: (req, res) => {
    Mongodbbank.find((error, result) => {
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
    Mongodbbank.findOne({ _id: req.params._id }, (error, result) => {
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

  addMongodbbank: async (req, res) => {
    try {
      Mongodbbank.create({
        id_user: req.body.id_user,
        nama_bank: req.body.nama_bank,
        no_rekening: req.body.no_rekening,
        jumlah_saldo: req.body.jumlah_saldo,
        date_time: req.body.date_time
      });
      res.status(200).send({
        message: "data bank is created",
        Mongodbbank
      });
    } catch (error) {
      res.status(400).send({
        message: `failed to created`,
        error: error.message
      });
    }
  },

  updateMongodbbank: (req, res) => {
    console.log(req.body);
    Mongodbbank.findOneAndUpdate(
      { _id: req.params._id },
      req.body,
      (error, result) => {
        if (error) {
          res.status(400).send({
            message: `data bank failed to update`,
            error
          });
        } else {
          res.status(200).send({
            message: `data bank update`,
            result
          });
        }
      }
    );
  },

  deleteMongodbbank: (req, res) => {
    Mongodbbank.findOneAndDelete({ _id: req.params._id }, (error, result) => {
      if (error) {
        res.status(400).send({
          message: `data bank failed to delete`,
          error
        });
      } else {
        res.status(200).send({
          message: `data bank delete`,
          result
        });
      }
    });
  }
};

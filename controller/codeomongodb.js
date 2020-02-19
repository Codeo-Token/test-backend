const Mongodb = require("../models/codeomongodb");

module.exports = {
  getAll: (req, res) => {
    Mongodb.find((error, result) => {
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
    Mongodb.findOne({ _id: req.params._id }, (error, result) => {
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

  addMongodb: async (req, res) => {
    try {
      Mongodb.create({
        nama_user: req.body.nama_user,
        email_user: req.body.email_user,
        id_level: req.body.no_rekening,
        password_user: req.body.password_user,
        date_user: req.body.date_user
      });
      res.status(200).send({
        message: "data user is created",
        Mongodb
      });
    } catch (error) {
      res.status(400).send({
        message: `failed to created`,
        error: error.message
      });
    }
  },

  updateMongodb: (req, res) => {
    console.log(req.body);
    Mongodb.findOneAndUpdate(
      { _id: req.params._id },
      req.body,
      (error, result) => {
        if (error) {
          res.status(400).send({
            message: `data user failed to update`,
            error
          });
        } else {
          res.status(200).send({
            message: `data user update`,
            result
          });
        }
      }
    );
  },

  deleteMongodb: (req, res) => {
    Mongodb.findOneAndDelete({ _id: req.params._id }, (error, result) => {
      if (error) {
        res.status(400).send({
          message: `data user failed to delete`,
          error
        });
      } else {
        res.status(200).send({
          message: `data user delete`,
          result
        });
      }
    });
  }
};

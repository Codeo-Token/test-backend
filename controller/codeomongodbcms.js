const Mongodbcms = require("../models/codeomongodbcms");

module.exports = {
  getAll: (req, res) => {
    Mongodbcms.find((error, result) => {
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
    Mongodbcms.findOne({ _id: req.params._id }, (error, result) => {
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

  addMongodbcms: async (req, res) => {
    try {
      Mongodbcms.create({
        id_category: req.body.id_category,
        title_cms: req.body.title_cms,
        description_cms: req.body.description_cms,
        date_updatecms: req.body.date_updatecms
      });
      res.status(200).send({
        message: "data cms is created",
        Mongodbcms
      });
    } catch (error) {
      res.status(400).send({
        message: `failed to created`,
        error: error.message
      });
    }
  },

  updateMongodbcms: (req, res) => {
    console.log(req.body);
    Mongodbcms.findOneAndUpdate(
      { _id: req.params._id },
      req.body,
      (error, result) => {
        if (error) {
          res.status(400).send({
            message: `data cms failed to update`,
            error
          });
        } else {
          res.status(200).send({
            message: `data cms update`,
            result
          });
        }
      }
    );
  },

  deleteMongodbcms: (req, res) => {
    Mongodbcms.findOneAndDelete({ _id: req.params._id }, (error, result) => {
      if (error) {
        res.status(400).send({
          message: `data cms failed to delete`,
          error
        });
      } else {
        res.status(200).send({
          message: `data cms delete`,
          result
        });
      }
    });
  }
};

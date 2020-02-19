const express = require("express");
const router = express.Router();
const {addMongodbcms,getAll,getOne,updateMongodbcms,deleteMongodbcms} = require ("../controller/codeomongodbcms");

router.post("/", addMongodbcms);
router.get("/", getAll);
router.get("/:_id", getOne);
router.put("/:_id", updateMongodbcms);
router.delete("/:_id", deleteMongodbcms);

module.exports = router;
const express = require("express");
const router = express.Router();
const {addMongodbbank,getAll,getOne,updateMongodbbank,deleteMongodbbank} = require ("../controller/codeomongodbbank");

router.post("/", addMongodbbank);
router.get("/", getAll);
router.get("/:_id", getOne);
router.put("/:_id", updateMongodbbank);
router.delete("/:_id", deleteMongodbbank);

module.exports = router;
const express = require("express");
const router = express.Router();
const {addMongodb,getAll,getOne,updateMongodb,deleteMongodb} = require ("../controller/codeomongodb");

router.post("/", addMongodb);
router.get("/", getAll);
router.get("/:_id", getOne);
router.put("/:_id", updateMongodb);
router.delete("/:_id", deleteMongodb);

module.exports = router;
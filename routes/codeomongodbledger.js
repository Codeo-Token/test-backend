const express = require("express");
const router = express.Router();
const {addMongodbledger,getAll,getOne,updateMongodbledger,deleteMongodbledger} = require ("../controller/codeomongodbledger");

router.post("/", addMongodbledger);
router.get("/", getAll);
router.get("/:_id", getOne);
router.put("/:_id", updateMongodbledger);
router.delete("/:_id", deleteMongodbledger);

module.exports = router;
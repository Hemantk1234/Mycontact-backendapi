const express = require("express");
const router = express.Router();
const {
  getcontacts,
  createcontact,
  getcontact,
  Updatecontact,
  Deletecontact,
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

router.get("/", validateToken, getcontacts);
router.post("/", validateToken, createcontact);
router.get("/:id", validateToken, getcontact);
router.put("/:id", validateToken, Updatecontact);
router.delete("/:id", validateToken, Deletecontact);

module.exports = router;

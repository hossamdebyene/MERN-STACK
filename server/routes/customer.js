const express = require("express");
const router = express.Router();
const {
  getCustomers,
  addCustomer,
  updateCustomer,
  deleteCustomer,
  verifyMobile,
} = require("../controllers/customerController");

router.route("/").get(getCustomers).post(addCustomer);
router.route("/:id").delete(deleteCustomer).put(updateCustomer);
router.route("/verification").post(verifyMobile);

module.exports = router;

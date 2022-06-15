const mongoose = require("mongoose");

const customerSchema = mongoose.Schema(
  {
    Name: { type: String, required: [true, "Please Add a Name"] },
    Address: { type: String, required: [true, "Please Add an address"] },
    MobileNumber: {
      type: String,
      unique: true,
      required: [true, "Please Add a Mobile Number"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", customerSchema);

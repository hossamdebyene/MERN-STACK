const asyncHandler = require("express-async-handler");
const request = require("request-promise");
const RestCountries = require("rest-countries-node");
const axios = require("axios");

const Customer = require("../model/customerModel");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

const getCustomers = asyncHandler(async (req, res) => {
  const customers = await Customer.find();
  res.status(200).json(customers);
});

const verifyMobile = asyncHandler(async (req, res) => {
  const customer = await Customer.findOne({
    MobileNumber: req.body.MobileNumber,
  }).exec();
  if (customer && !req.body.checking) {
    res.status(404).json({ message: "Number is Registered" });
  } else {
    client.lookups.v1
      .phoneNumbers(req.body.MobileNumber)
      .fetch({ type: ["carrier"] })
      .then(async (response) => {
        const countryDetail = await axios.get(
          "https://restcountries.com/v2/alpha/" + response.countryCode
        );
        console.log(countryDetail);
        res.status(200).json({
          countryCode: countryDetail.data.callingCodes[0],
          countryName: countryDetail.data.name,
          operatorName: response.carrier.name,
        });
      })
      .catch((err) => {
        if (err.status === 404) {
          res.status(404).json({
            message: "Invalid Number",
          });
        }
      });
  }
});
const addCustomer = asyncHandler(async (req, res) => {
  if (!req.body.Name || !req.body.MobileNumber || !req.body.Address) {
    res.status(404).json({ message: "Please Check All Fields are Filled" });
  } else {
    const addCustomer = await Customer.create({
      Name: req.body.Name,
      Address: req.body.Address,
      MobileNumber: req.body.MobileNumber,
    });
    res.status(200).json(addCustomer);
  }
});

const updateCustomer = asyncHandler(async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  if (!customer) {
    res.status(400);
    throw new Error("Customer Not Found");
  }

  const updatedCustomer = await Customer.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedCustomer);
});
const deleteCustomer = asyncHandler(async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  if (!customer) {
    res.status(400);
    throw new Error("Customer Not Found");
  }
  const deletedCustomer = customer.remove();
  res.status(200).json(deletedCustomer);
});

module.exports = {
  getCustomers,
  addCustomer,
  updateCustomer,
  deleteCustomer,
  verifyMobile,
};

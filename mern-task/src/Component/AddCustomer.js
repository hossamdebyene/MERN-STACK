import React from "react";
import { useState } from "react";
import "../CSS/AddCustomer.css";
import { Form, Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function AddCustomer() {
  const location = useLocation();
  const navigate = useNavigate();
  const [value, setValue] = useState(
    location.state ? location.state.MobileNumber.toString() : null
  );
  const [name, setName] = useState(location.state ? location.state.Name : null);
  const [address, setAddress] = useState(
    location.state ? location.state.Address : null
  );
  const [message, setMessage] = useState("");
  const [addCustomer, setAddCustomer] = useState(false);
  const [mobileNumberInfo, setMobileNumberInfo] = useState(null);
  const verifyMobileNumber = async (e) => {
    e.preventDefault();
    if (!addCustomer) {
      await axios
        .post("http://localhost:5000/api/customer/verification", {
          MobileNumber: value,
          checking: location.state ? true : false,
        })
        .then((response) => {
          if (response.status === 200) {
            setAddCustomer(true);
            setMobileNumberInfo(response.data);
          }
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status === 404) {
            if (
              error.response.data.message === "Number is Registered" &&
              location.state
            ) {
              setAddCustomer(true);
            } else {
              setMessage(error.response.data.message);
              setValue(null);
            }
          }
        });
    } else {
      if (location.state) {
        const formData = Object.fromEntries(new FormData(e.target).entries());
        console.log(formData);
        await axios
          .put(`http://localhost:5000/api/customer/${location.state._id}`, {
            Name: formData.name,
            Address: formData.address,
            MobileNumber: value,
          })
          .then((response) => {
            console.log(response);
            if (response.status === 200) {
              navigate("/Home");
            }
          })
          .catch((error) => {
            setMessage(error.response.data.message);
          });
      } else {
        const formData = Object.fromEntries(new FormData(e.target).entries());
        console.log(formData);
        await axios
          .post("http://localhost:5000/api/customer/", {
            Name: formData.name,
            Address: formData.address,
            MobileNumber: value,
          })
          .then((response) => {
            console.log(response);
            if (response.status === 200) {
              navigate("/Home");
            }
          })
          .catch((error) => {
            setMessage(error.response.data.message);
          });
      }
    }
  };
  return (
    <div className="App-header">
      <Form className="customerForm" onSubmit={verifyMobileNumber}>
        <h1 style={{ textAlign: "center" }}>
          {addCustomer ? "Customer Form" : "Customer Verification"}
        </h1>
        <hr />
        {!addCustomer ? (
          <>
            <Form.Group className="my-3 mx-4" controlId="formBasicEmail">
              <Form.Label>Mobile Number</Form.Label>
              <PhoneInput
                placeholder="Enter phone number"
                value={value}
                data-testId="mobilevalue"
                id="phoneNumber"
                onChange={(e) => {
                  setValue(e);
                  setMessage("");
                }}
                required
              />
              <span id="message" className="text-danger">
                {message}
              </span>
            </Form.Group>
            <div className="control my-3 mx-4">
              <Button
                data-testId="verification"
                className="verify"
                id="verify"
                variant="primary"
                type="submit"
              >
                {location.state
                  ? location.state.MobileNumber === value
                    ? "Continue"
                    : "Edit"
                  : "Verify"}
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="row heading mx-4">
              <h6 className="nopad col-4">{`Country: ${mobileNumberInfo.countryName}`}</h6>
              <h6 className="nopad col-4">{`Country Code: ${mobileNumberInfo.countryCode}`}</h6>
              <h6 className="nopad col-4">{`Operator Name: ${mobileNumberInfo.operatorName}`}</h6>
            </div>
            <Form.Group className="my-3 mx-4">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control
                placeholder="Add Customer Full Name"
                name="name"
                id="name"
                value={name}
                data-testId="name"
                onChange={(e) => {
                  setMessage("");
                  setName(e.target.value);
                }}
                required
              />
            </Form.Group>
            <Form.Group className="my-3 mx-4">
              <Form.Label>Customer Address</Form.Label>
              <Form.Control
                placeholder="Add Customer Address"
                name="address"
                id="address"
                as={"textarea"}
                value={address}
                data-testId="address"
                onChange={(e) => {
                  setMessage("");
                  setAddress(e.target.value);
                }}
                required
              />
            </Form.Group>
            <Form.Group className="my-3 mx-4">
              <Form.Label>Customer Mobile Number</Form.Label>
              <PhoneInput value={value} readOnly data-testId="mobile" />
              <span className="text-danger">{message}</span>
            </Form.Group>
            <div className="control my-3 mx-4">
              <Button
                className="add"
                variant="secondary"
                type="button"
                data-testId="back"
                id="back"
                onClick={() => {
                  setAddCustomer(false);
                  setMobileNumberInfo(null);
                }}
              >
                Back
              </Button>
              <Button
                data-testId="add"
                id="add"
                className="add"
                variant="primary"
                type="submit"
              >
                {location.state ? "UPDATE" : "Add"}
              </Button>
            </div>
          </>
        )}
      </Form>
    </div>
  );
}

export default AddCustomer;
